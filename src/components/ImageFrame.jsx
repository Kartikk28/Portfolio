function ImageFrame({ src }) {
    return (
      <div className="relative w-[280px] h-[360px] md:w-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 
        bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] 
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.5)]">
        <video
          src={src}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    );
  }
  