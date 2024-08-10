import { useEffect, useRef } from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className={`fixed z-10 w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-md ${isVisible ? 'opacity-100 transition-opacity' : 'opacity-0 pointer-events-none'}`}>
      <div ref={modalRef} className="bg-sub-bg-color px-12 py-8 rounded-2xl text-xl mx-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
