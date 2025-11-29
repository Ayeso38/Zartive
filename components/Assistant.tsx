import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

// Simple local response system instead of Gemini API
const getLocalResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('package')) {
    return "Great question! Alex offers three packages:\n\n• **The Essential** ($500): 1 hour, 25 edited photos - perfect for headshots or quick portraits.\n• **The Storyteller** ($1200): 4 hours, 100+ photos, includes a photobook - ideal for engagements or branding.\n• **The Legacy** ($2500): Full day coverage, 400+ photos, second shooter included - perfect for weddings.\n\nYou can see all the details on the Pricing page!";
  }
  
  if (lowerMessage.includes('book') || lowerMessage.includes('available') || lowerMessage.includes('schedule')) {
    return "Alex is typically booked about 2 months in advance, with weekends filling up fastest. You can check availability and submit a booking request on the Booking page - no payment required until Alex confirms your date!";
  }
  
  if (lowerMessage.includes('style') || lowerMessage.includes('look')) {
    return "Alex's style is documentary and candid - think natural light, warm tones, and genuine moments. No awkward posing or \"say cheese\" vibes here! The goal is to capture real emotions and authentic connections.";
  }
  
  if (lowerMessage.includes('camera') || lowerMessage.includes('gear') || lowerMessage.includes('equipment')) {
    return "Alex shoots with Sony Alpha cameras and a collection of prime lenses - they're great for that beautiful background blur and sharp details. The editing style is film-inspired with warm, natural tones.";
  }
  
  if (lowerMessage.includes('travel') || lowerMessage.includes('location')) {
    return "Alex is based in San Francisco but travels worldwide for shoots! Travel fees may apply depending on the destination. Just mention your location when booking and we can work out the details.";
  }
  
  if (lowerMessage.includes('wedding')) {
    return "Weddings are Alex's jam! The Legacy package ($2500) is designed for full-day wedding coverage - 10 hours, 400+ photos, a second shooter, and a premium leather album. Alex focuses on capturing all those candid, emotional moments that make your day unique.";
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hey there! 👋 I'm Lens, Alex's AI assistant. I can help you with questions about pricing, booking, Alex's photography style, or anything else about the studio. What would you like to know?";
  }
  
  return "That's a great question! I'd recommend checking out the Pricing page for package details, or head to the Booking page to request a session. If you have specific questions about Alex's style or availability, I'm happy to help with those too!";
};

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Lens, the AI assistant. Ask me about pricing, gear, or availability.", timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Simulate thinking time
    setTimeout(() => {
      const responseText = getLocalResponse(userMsg.text);
      const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, modelMsg]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 ${
          isOpen ? 'bg-ph-dark rotate-90' : 'bg-ph-blue'
        } text-white`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-ph-dark p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-ph-orange flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-sm">Lens AI</h3>
                    <p className="text-xs text-gray-400">Ask me anything</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-ph-blue text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-ph-blue focus:outline-none"
                />
                <button 
                    onClick={handleSend}
                    disabled={!inputText.trim() || isLoading}
                    className="p-2 bg-ph-dark text-white rounded-full hover:bg-ph-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send size={18} />
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;
