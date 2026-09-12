import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ActivityModal = ({ isOpen, onClose, activity, closeText }) => {
  if (!activity) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white border-0">
        <div className="relative h-64 sm:h-80 w-full">
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
              {activity.title}
            </DialogTitle>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <DialogDescription className="text-base sm:text-lg text-stone-700 leading-relaxed space-y-4">
            {activity.fullDescription.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </DialogDescription>
          <div className="mt-8 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline" className="border-emerald-200 text-emerald-800 hover:bg-emerald-50">
                {closeText}
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityModal;