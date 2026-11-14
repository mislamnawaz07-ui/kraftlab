export default function Home() {
  return (
    <div className="bg-[#FAF6F0] text-[#1A1A1A] overflow-x-hidden">

      {/* 1. NAVBAR - MENU RIGHT SIDE */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-[#FAF6F0] sticky top-0 z-50 border-b border-black/5">
        <a href="#home" className="font-black text-xl tracking-tight flex items-center gap-2 shrink-0">
          <span className="text-[#4A5D3A]">🌿</span> KRAFTLAB
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex gap-7 text-sm font-medium">
            <a href="#work" className="hover:text-[#A67C4D]">Work</a>
            <a href="#categories" className="hover:text-[#A67C4D]">Jars</a>
            <a href="#categories" className="hover:text-[#A67C4D]">Pouches</a>
            <a href="#pricing" className="hover:text-[#A67C4D]">Pricing</a>
            <a href="#contact" className="hover:text-[#A67C4D]">Contact</a>
          </div>
          <a href="#contact" className="bg-black text-white px-5 py-2.5 rounded-md text-sm font-semibold flex gap-2 items-center shrink-0">
            Get a Quote <span>→</span>
          </a>
        </div>
      </nav>

      {/* 2. HERO - JAR.PNG + POUCH.JPG */}
      <section id="home" className="px-6 md:px-16 pt-14 md:pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-[#EDE8DE] text-[11px] tracking-widest font-bold px-4 py-2 rounded-full">● TRUSTED BY 120+ HERBAL BRANDS</span>
          <h1 className="text-[52px] md:text-[72px] leading-[0.95] font-black tracking-tight mt-6">
            We Design Labels<br />That <span className="font-serif-display italic font-normal text-[#A67C4D]">Sell.</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-md leading-relaxed">
            Premium labels and pouches crafted to make your herbal products look credible, desirable, and ready for the shelf.
          </p>
          <div className="flex gap-3 mt-8">
            <a href="#work" className="bg-black text-white px-6 py-3.5 rounded-md text-sm font-semibold">Explore Work →</a>
            <a href="#contact" className="border border-black px-6 py-3.5 rounded-md text-sm font-semibold bg-white">Get a Quote</a>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-[#C9A86A] border-2 border-white flex items-center justify-center text-[10px] font-bold">AK</span>
              <span className="w-8 h-8 rounded-full bg-[#4A5D3A] text-white border-2 border-white flex items-center justify-center text-[10px] font-bold">SN</span>
              <span className="w-8 h-8 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-[10px] font-bold">FK</span>
            </div>
            <div>
              <p className="text-sm font-bold">4.9/5</p>
              <p className="text-xs text-gray-500">From 80+ happy clients</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-[#E8DCC8] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative flex gap-4 items-end z-10">
            <img src="/jar.png" alt="Herbal Healix Jar" className="w-[160px] md:w-[200px] h-[240px] object-cover rounded-2xl shadow-2xl bg-white" />
            <img src="/pouch.jpg" alt="Carewell Pouch" className="w-[160px] md:w-[200px] h-[260px] object-cover rounded-2xl shadow-2xl rotate-2" />
          </div>
          <div className="absolute left-0 top-[55%] bg-white shadow-lg rounded-lg px-3 py-2 z-20 text-xs"><span className="text-[10px] text-gray-500">01 / Material</span><br /><b>Food-safe</b></div>
          <div className="absolute right-0 top-[30%] bg-white shadow-lg rounded-lg px-3 py-2 z-20 text-xs"><span className="text-[10px] text-gray-500">Finish</span><br /><b>Soft Matte</b></div>
        </div>
      </section>

      {/* 3. MARQUEE - RIGHT TO LEFT */}
      <div className="bg-[#4A5D3A] text-white py-4 overflow-hidden">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          <span className="text-sm font-bold tracking-[0.2em] whitespace-nowrap">
            POUCH LABELS ✦ KRAFT PACKAGING ✦ JAR LABELS ✦ POUCH LABELS ✦ KRAFT PACKAGING ✦ JAR LABELS ✦ POUCH LABELS ✦ KRAFT PACKAGING ✦ JAR LABELS ✦
          </span>
        </marquee>
      </div>

      {/* 4. WORK */}
      <section id="work" className="px-6 md:px-16 py-20">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs tracking-[0.3em] font-bold text-[#A67C4D]">SELECTED WORK</p>
            <h2 className="text-4xl md:text-5xl font-black mt-3">Made to be picked<br /><span className="font-serif-display italic font-normal text-[#A67C4D]">off the shelf.</span></h2>
          </div>
          <a href="#contact" className="hidden md:block font-semibold text-sm border-b-2 border-black pb-1">Start your project →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="group cursor-pointer">
            <div className="h-[340px] rounded-2xl overflow-hidden bg-white"><img src="/jar.png" alt="Herbal Healix" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></div>
            <h3 className="font-bold text-lg mt-4">Herbal Healix</h3><p className="text-sm text-gray-500">Jar Label - Derm Cream</p>
          </div>
          <div className="group cursor-pointer">
            <div className="h-[340px] rounded-2xl overflow-hidden bg-white"><img src="/pouch.jpg" alt="Carewell" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></div>
            <h3 className="font-bold text-lg mt-4">Carewell</h3><p className="text-sm text-gray-500">Premium Pouch Label</p>
          </div>
          <div className="group cursor-pointer">
            <div className="h-[340px] rounded-2xl overflow-hidden bg-white"><img src="/jar.png" alt="Forest Honey" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></div>
            <h3 className="font-bold text-lg mt-4">Herbal Healix - Qahwa</h3><p className="text-sm text-gray-500">Jar + Pouch System</p>
          </div>
        </div>
      </section>

      {/* 5. CATEGORIES - JAR.PNG + POUCH.JPG */}
      <section id="categories" className="px-6 md:px-16 pb-20">
        <p className="text-xs tracking-[0.3em] font-bold text-[#A67C4D]">WHAT WE MAKE</p>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-3">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">Packaging that feels<br /><span className="font-serif-display italic font-normal text-[#A67C4D]">as good as it looks.</span></h2>
          <p className="text-gray-600 max-w-xs text-sm leading-relaxed md:text-right">From the first sketch to the final print, every detail is considered for shelf impact.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#4A5D3A] text-white rounded-3xl p-8 flex justify-between items-center min-h-[300px] overflow-hidden">
            <div><p className="text-xs opacity-70">01 / COLLECTION</p><h3 className="text-4xl font-black mt-4">JAR<br />LABELS</h3><span className="inline-block mt-6 w-10 h-10 border border-white/40 rounded-full text-center leading-10">→</span></div>
            <img src="/jar.png" alt="Herbal Healix Jar Label" className="w-[170px] h-[200px] md:w-[200px] md:h-[230px] object-cover rounded-xl shadow-2xl rotate-2 bg-white" />
          </div>
          <div className="bg-[#A67C4D] text-white rounded-3xl p-8 flex justify-between items-center min-h-[300px] overflow-hidden">
            <div><p className="text-xs opacity-70">02 / COLLECTION</p><h3 className="text-4xl font-black mt-4">POUCH<br />LABELS</h3><span className="inline-block mt-6 w-10 h-10 border border-white/40 rounded-full text-center leading-10">→</span></div>
            <img src="/pouch.jpg" alt="Carewell Pouch Label" className="w-[170px] h-[230px] md:w-[200px] md:h-[260px] object-cover rounded-xl shadow-2xl -rotate-2" />
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="px-6 md:px-16 pb-20">
        <p className="text-xs tracking-[0.3em] font-bold text-[#A67C4D]">SIMPLE PRICING</p>
        <h2 className="text-4xl md:text-5xl font-black mt-3">Start small. <span className="font-serif-display italic font-normal text-[#A67C4D]">Grow beautifully.</span></h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white border rounded-3xl p-8">
            <div className="flex justify-between"><h3 className="font-black tracking-widest">STARTER</h3><span className="bg-[#EDE8DE] px-3 py-1 rounded-full text-xs font-bold">100 PCS</span></div>
            <p className="text-4xl font-black mt-6">Rs. 45 <span className="text-base font-normal text-gray-500">/ label</span></p>
            <p className="text-sm text-gray-500 mt-2">Perfect for new brands testing the market.</p>
            <ul className="mt-6 space-y-3 text-sm"><li>✓ Custom label design</li><li>✓ Premium matte finish</li><li>✓ 1 free mockup</li><li>✓ 7-10 day delivery</li></ul>
            <a href="#contact" className="block text-center border border-black py-3 rounded-lg font-semibold mt-8">Get Started →</a>
          </div>
          <div className="bg-black text-white rounded-3xl p-8 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A67C4D] text-white text-xs font-bold px-4 py-1.5 rounded-full">MOST POPULAR</span>
            <div className="flex justify-between"><h3 className="font-black tracking-widest">GROWTH</h3><span className="bg-white/15 px-3 py-1 rounded-full text-xs font-bold">500 PCS</span></div>
            <p className="text-4xl font-black mt-6">Rs. 28 <span className="text-base font-normal text-gray-400">/ label</span></p>
            <p className="text-sm text-gray-400 mt-2">The sweet spot for growing herbal brands.</p>
            <ul className="mt-6 space-y-3 text-sm"><li>✓ Custom label design</li><li>✓ Premium matte finish</li><li>✓ 2 free mockups</li><li>✓ Priority production</li></ul>
            <a href="#contact" className="block text-center bg-white text-black py-3 rounded-lg font-semibold mt-8">Get Started →</a>
          </div>
          <div className="bg-white border rounded-3xl p-8">
            <div className="flex justify-between"><h3 className="font-black tracking-widest">PREMIUM</h3><span className="bg-[#EDE8DE] px-3 py-1 rounded-full text-xs font-bold">1000+ PCS</span></div>
            <p className="text-4xl font-black mt-6">Custom <span className="text-base font-normal text-gray-500">quote</span></p>
            <p className="text-sm text-gray-500 mt-2">Best value for established product lines.</p>
            <ul className="mt-6 space-y-3 text-sm"><li>✓ Full packaging system</li><li>✓ Special finishes</li><li>✓ Unlimited revisions</li><li>✓ Dedicated support</li></ul>
            <a href="#contact" className="block text-center border border-black py-3 rounded-lg font-semibold mt-8">Get Started →</a>
          </div>
        </div>
      </section>

      {/* 7. CONTACT + FOOTER */}
      <section id="contact" className="bg-[#141414] text-white px-6 md:px-16 pt-20 pb-10 text-center">
        <span className="text-2xl">🌿</span>
        <p className="text-[11px] tracking-[0.3em] text-[#C9A86A] font-bold mt-4">LET'S BUILD SOMETHING BEAUTIFUL</p>
        <h2 className="text-4xl md:text-6xl font-black mt-4 leading-tight">Ready to make your<br />brand look <span className="font-serif-display italic font-normal text-[#C9A86A]">premium?</span></h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mt-5 leading-relaxed">Tell us what you're working on. We'll reply with ideas, pricing, and your next steps within one business day.</p>
        <a href="https://wa.me/923001234567" target="_blank" className="inline-block bg-white text-black px-6 py-3.5 rounded-md font-semibold text-sm mt-8">Chat on WhatsApp →</a>
        <div className="border-t border-white/10 mt-20 pt-10 grid md:grid-cols-3 gap-8 text-left">
          <div><p className="font-black text-lg flex gap-2">🌿 KRAFTLAB</p><p className="text-sm text-gray-400 mt-3 max-w-[260px] leading-relaxed">Label & pouch studio for herbal brands that want to look the part.</p></div>
          <div><p className="text-[11px] tracking-[0.3em] text-[#C9A86A] font-bold">EXPLORE</p><div className="flex flex-col gap-2 mt-4 text-sm text-gray-300"><a href="#work">Our Work</a><a href="#categories">Jar Labels</a><a href="#categories">Pouch Labels</a><a href="#pricing">Pricing</a></div></div>
          <div><p className="text-[11px] tracking-[0.3em] text-[#C9A86A] font-bold">CONTACT</p><div className="flex flex-col gap-2 mt-4 text-sm text-gray-300"><span>hello@kraftlab.pk</span><span>+92 300 123 4567</span><span>Lahore, Pakistan</span></div></div>
        </div>
        <p className="text-xs text-gray-600 mt-10">© 2026 KRAFTLAB. All rights reserved.</p>
      </section>

    </div>
  );
}