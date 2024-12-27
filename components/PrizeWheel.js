import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

const PrizeWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [prize, setPrize] = useState(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const prizes = [
    "20% Discount",
    "Free Shipping",
    "Buy 1 Get 1",
    "5% Cashback",
    "Free Gift",
    "15% Discount"
  ];

  const spinWheel = () => {
    if (!isSpinning && !hasPlayed) {
      setIsSpinning(true);
      // Random rotation between 5-10 full spins plus the prize position
      const randomSpins = 1800 + Math.floor(Math.random() * 1800);
      const finalRotation = randomSpins + (Math.floor(Math.random() * 6) * (360/6));
      setRotation(finalRotation);
      
      // Determine prize based on final position
      setTimeout(() => {
        const prizeIndex = Math.floor((finalRotation % 360) / (360/6));
        setPrize(prizes[prizeIndex]);
        setIsSpinning(false);
        setHasPlayed(true);
      }, 5000);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold">Spin & Win!</h2>
        <p className="text-gray-600">Spin the wheel to reveal your special prize</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="relative w-64 h-64 mx-auto mb-8">
          {/* Wheel */}
          <div
            className="absolute w-full h-full rounded-full border-4 border-gray-200"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)',
              backgroundImage: 'conic-gradient(from 0deg, #FF6B6B 0deg 60deg, #4ECDC4 60deg 120deg, #45B7D1 120deg 180deg, #96CEB4 180deg 240deg, #FFEEAD 240deg 300deg, #FFD93D 300deg 360deg)',
            }}
          >
            {prizes.map((_, index) => (
              <div
                key={index}
                className="absolute w-full text-center text-xs font-bold text-white"
                style={{
                  transform: `rotate(${index * 60 + 30}deg)`,
                  transformOrigin: '50% 50%',
                }}
              >
                {prizes[index]}
              </div>
            ))}
          </div>
          {/* Center pointer */}
          <div className="absolute top-0 left-1/2 -ml-3 w-6 h-6 text-red-500">▼</div>
        </div>

        <div className="text-center">
          <Button
            onClick={spinWheel}
            disabled={isSpinning || hasPlayed}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2"
          >
            <Gift className="w-4 h-4" />
            {isSpinning ? 'Spinning...' : hasPlayed ? 'Thanks for Playing!' : 'Spin Now!'}
          </Button>

          {prize && (
            <div className="mt-4">
              <h3 className="text-xl font-bold text-green-600">Congratulations! 🎉</h3>
              <p className="text-lg">You won: {prize}</p>
              <p className="text-sm text-gray-600 mt-2">Check your email for your prize details!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PrizeWheel;