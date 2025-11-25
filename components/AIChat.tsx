import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Copy, Check, Sparkles, Loader, ThumbsUp, ThumbsDown, Share2, RotateCcw } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';

const ChatMessage = ({ msg, idx, onFeedback }) => {
  const [copied, setCopied] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const isUser = msg.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up group`} style={{ animationDelay: `${idx * 30}ms` }}>
      {!isUser && (
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
          <Bot size={14} className="text-white" />
        </div>
      )}
      
      <div className="flex flex-col gap-1 max-w-[70%]">
        <div 
          className={`px-3 py-2 rounded-lg text-xs leading-relaxed transition-all duration-200 backdrop-blur-sm
            ${isUser 
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm shadow-md shadow-blue-500/20' 
              : 'bg-white/8 text-slate-100 rounded-bl-sm border border-white/10 hover:bg-white/12'
            }
          `}
        >
          {msg.text}
        </div>
        
        {!isUser && (
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-white/5"
            >
              {copied ? <Check size={10} /> : <Copy size={10} />}
              <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            
            <button
              onClick={() => setShowFeedback(!showFeedback)}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-400 hover:text-slate-200 flex items-center gap-0.5 px-1 py-0.5 rounded hover:bg-white/5"
            >
              <span className="text-[10px]">Helpful?</span>
            </button>
          </div>
        )}
        
        {showFeedback && !isUser && (
          <div className="flex gap-1 pt-1">
            <button
              onClick={() => { onFeedback(idx, 'helpful'); setShowFeedback(false); }}
              className="p-1 rounded hover:bg-green-500/20 text-green-400 transition-colors"
              title="Helpful"
            >
              <ThumbsUp size={12} />
            </button>
            <button
              onClick={() => { onFeedback(idx, 'unhelpful'); setShowFeedback(false); }}
              className="p-1 rounded hover:bg-red-500/20 text-red-400 transition-colors"
              title="Not helpful"
            >
              <ThumbsDown size={12} />
            </button>
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
          <User size={14} className="text-white" />
        </div>
      )}
    </div>
  );
};

const SuggestedPrompt = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg text-xs text-slate-300 hover:text-white transition-all text-left flex items-start gap-2 group"
    >
      <Sparkles size={12} className="text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
      <span className="flex-1 leading-snug">{text}</span>
    </button>
  );
};

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: '👋 I\'m Ansh\'s AI. How can I help?', id: 0 }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionId] = useState(() => `session_${Date.now()}`);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messageIdRef = useRef(1);

  const suggestedPrompts = [
    'Show me your recent projects',
    'What services do you offer?',
    'How can I hire you?',
    'Tell me about your skills'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    const userMessage = { role: 'user', text: userText, id: messageIdRef.current++ };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      // Use client-side service to get a response (no backend required)
      const text = await getChatResponse(userText);
      const aiMessage = {
        role: 'model',
        text: text || 'Sorry, I couldn\'t process that. Please try again.',
        id: messageIdRef.current++
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      setError('Connection error. Please try again.');
      const errorMsg = {
        role: 'model',
        text: 'Sorry, I\'m having trouble processing that. Please try again in a moment.',
        id: messageIdRef.current++
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedPrompt = (text) => {
    setInput(text);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFeedback = (msgId, type) => {
    // Local feedback handler — stores feedback client-side for now
    console.log(`Message ${msgId} marked as ${type}`);
    try {
      const stored = window.localStorage.getItem('ai_feedback') || '[]';
      const arr = JSON.parse(stored);
      arr.push({ messageId: msgId, type, sessionId, timestamp: Date.now() });
      window.localStorage.setItem('ai_feedback', JSON.stringify(arr));
    } catch (e) {
      console.warn('Could not store feedback locally', e);
    }
  };

  const handleClearChat = () => {
    if (window.confirm('Clear chat history?')) {
      setMessages([{ role: 'model', text: '👋 I\'m Ansh\'s AI. How can I help?', id: 0 }]);
      messageIdRef.current = 1;
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 p-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:scale-110
          ${isOpen 
            ? 'bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-slate-300' 
            : 'bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border border-blue-400/50'
          }
        `}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-20 right-4 w-80 h-[550px] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl shadow-2xl flex flex-col transition-all duration-300 z-40 origin-bottom-right overflow-hidden backdrop-blur-xl
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="px-3 py-2.5 border-b border-white/5 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-cyan-500/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-xs leading-tight">Ansh's AI</h3>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shrink-0"></span>
                  <span className="text-xs text-slate-400 truncate">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1 hover:bg-white/10 rounded transition-colors shrink-0"
                title="Clear chat"
              >
                <RotateCcw size={14} className="text-slate-400 hover:text-slate-200" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors shrink-0"
              >
                <X size={16} className="text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {messages.length === 1 && (
            <div className="mt-4 space-y-2.5">
              <div className="text-center mb-3">
                <h4 className="text-slate-300 font-semibold text-xs mb-0.5">How can I help?</h4>
                <p className="text-xs text-slate-500">Try a suggestion or ask anything</p>
              </div>
              <div className="space-y-1.5">
                {suggestedPrompts.map((prompt, i) => (
                  <SuggestedPrompt
                    key={i}
                    text={prompt}
                    onClick={() => handleSuggestedPrompt(prompt)}
                  />
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                <p className="text-xs text-slate-500 text-center">Features:</p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <span>AI-powered responses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <span>Context-aware assistance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <span>Quick project inquiries</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <ChatMessage 
              key={msg.id} 
              msg={msg} 
              idx={idx}
              onFeedback={handleFeedback}
            />
          ))}
          
          {isLoading && (
            <div className="flex gap-2 animate-fade-in-up">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                <Bot size={14} className="text-white" />
              </div>
              <div className="bg-white/8 px-3 py-2 rounded-lg rounded-bl-sm border border-white/10 flex items-center gap-1">
                <Loader size={12} className="animate-spin text-slate-400" />
                <span className="text-xs text-slate-400">Processing...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 px-3 py-2 rounded-lg text-xs text-red-300 flex items-start gap-2">
              <span className="text-sm shrink-0">⚠️</span>
              <span>{error}</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="px-3 py-2.5 border-t border-white/5 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent space-y-2">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg pl-3 pr-2 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-1 focus:ring-blue-500/20 transition-all hover:bg-white/[7%] hover:border-white/20"
            />
            <button
              onClick={handleSubmit}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 flex items-center justify-center rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 border border-blue-400/50 shrink-0"
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
          <p className="text-xs text-slate-500 text-center leading-tight">Enter to send</p>
        </div>

        {/* Footer Status */}
        <div className="px-3 py-1.5 bg-white/5 border-t border-white/5 text-xs text-slate-400 text-center">
          <span>Session: {sessionId.slice(-6)}</span>
        </div>
      </div>
    </>
  );
};

export default AIChat;