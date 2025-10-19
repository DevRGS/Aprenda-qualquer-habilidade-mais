"use client";

import React, { useState, useEffect } from 'react';

const BonusTimer = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const getDeadline = (): Date => {
      const storedDeadline = localStorage.getItem('bonusDeadline');
      if (storedDeadline) {
        return new Date(storedDeadline);
      } else {
        const newDeadline = new Date();
        newDeadline.setDate(newDeadline.getDate() + 7);
        localStorage.setItem('bonusDeadline', newDeadline.toISOString());
        return newDeadline;
      }
    };

    const deadline = getDeadline();

    const calculateTimeLeft = () => {
      const difference = +deadline - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsExpired(false);
      } else {
        setTimeLeft(null);
        setIsExpired(true);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  if (isExpired) {
    return (
      <div>
        <h3 className="text-2xl font-bold mb-2 text-red-600">OFERTA EXPIRADA</h3>
        <p className="text-lg text-gray-600">
          O bônus agora custa <span className="font-bold text-red-700">R$47,00</span>. Adicione ao seu pedido.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2 text-amber-700">BÔNUS GRATUITO POR TEMPO LIMITADO</h3>
      <p className="text-lg text-gray-600 mb-4">
        Ao adquirir o ebook hoje, você recebe o guia <span className="font-semibold">"Como Evitar Quedas de Motivação e Manter Constância"</span> (no valor de R$47,00) <span className="font-bold text-green-600">totalmente de graça</span>.
      </p>
      {timeLeft && (
        <div className="bg-white p-4 rounded-lg shadow-inner text-center">
          <p className="text-sm text-gray-500 mb-1">Esta oferta termina em:</p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="text-xs text-gray-500">DIAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs text-gray-500">HORAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs text-gray-500">MIN</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs text-gray-500">SEG</div>
            </div>
          </div>
        </div>
      )}
      <p className="text-sm text-gray-500 mt-4">
        Após o término do cronômetro, o bônus custará R$47,00.
      </p>
    </div>
  );
};

export default BonusTimer;