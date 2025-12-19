'use client';
import React, { useState } from 'react';

const faqData = [
    {
        question: "What is ExpressCronJob?",
        answer: "ExpressCronJob is a web-based service that lets developers and businesses schedule and run automated tasks effortlessly."
    },
    {
        question: "How do I create a cron job?",
        answer: "You can create a cron job by signing in, choosing the task you want to automate, and setting the desired schedule directly from your dashboard."
    },
    {
        question: "Is ExpressCronJob secure?",
        answer: "Yes. We prioritize security and ensure all tasks and data are handled safely, with proper access controls and encryption where necessary."
    },
    {
        question: "Can I cancel or edit my tasks?",
        answer: "Absolutely! You can edit or cancel any scheduled task directly from your dashboard, giving you full control over your automation."
    },
    {
        question: "What is refund policy?",
        answer: "If you are not satisfied with our service, you can request 95% refund within 15 days of your purchase. Processing day will take only 1-3 days."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-inner-speacing max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full text-left px-4 lg:px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                        >
                            <span className="font-medium text-gray-800">{item.question}</span>
                            <span className="text-xl transform transition-transform duration-200">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="px-4 lg:px-6 py-4 text-gray-700 bg-white border-t border-gray-200">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
