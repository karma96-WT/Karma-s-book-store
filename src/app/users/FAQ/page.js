"use client"; // important if you are in app/ directory

import React, { useState } from "react";
import "./local.css";

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      q: "How do I place an order?",
      a: "You can place an order by browsing our catalog, adding books to your cart, and checking out using a secure payment method.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept major credit/debit cards, PayPal, mBoB, and mPay.",
    },
    {
      q: "Can I cancel or change my order after placing it?",
      a: "Orders can be modified or canceled within 1 hour of placement. Please contact customer support as soon as possible.",
    },
    {
      q: "Do you offer free shipping?",
      a: "Yes, we offer free standard shipping on orders above Nu.1500.",
    },
    {
      q: "How long does delivery take?",
      a: "Standard delivery typically takes 3–7 business days, depending on your location.",
    },
    {
      q: "Can I track my order?",
      a: "Absolutely! You’ll receive a tracking link via email/SMS once your order is shipped.",
    },
    {
      q: "What is your return policy?",
      a: "Books can be returned within 7 days of delivery if they are in original condition and packaging.",
    },
    {
      q: "How do I request a return or refund?",
      a: "You can initiate a return by visiting the My Orders section or contacting our support team.",
    },
    {
      q: "When will I receive my refund?",
      a: "Refunds are processed within 5–7 business days after the returned item is received.",
    },
    {
      q: "Do you take special book requests?",
      a: "Yes! If you're looking for a specific title not listed, contact us and we’ll try to source it for you.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="super-main">
        <div className="heading">Frequently Asked Questions (FAQs)</div>
        <div className="main">
          <ul>
            {questions.map((item, index) => (
              <li
                key={index}
                className="question"
                onClick={() => toggleQuestion(index)}
                style={{ cursor: "pointer" }}
              >
                {item.q}
                <span style={{ display: openIndex === index ? "block" : "none" }}>
                  {item.a}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
