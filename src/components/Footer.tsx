const Footer = () => {
  return (
    <footer className="h-full px-16 py-16 relative bg-[#F5F5F5]">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex-1 p-4">
          <img
            src="/landing/footer/logo.png"
            alt="M-Knows Logo"
            className="rounded-3xl w-auto h-16"
          />
          <div className="flex pt-6 pb-4 gap-x-7">
            <img
              src="/landing/footer/fb.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-6"
            />
            <img
              src="/landing/footer/ig.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-6"
            />
            <img
              src="/landing/footer/twitter.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-6"
            />
            <img
              src="/landing/footer/linkedin.png"
              alt="M-Knows Logo"
              className="rounded-3xl w-auto h-6"
            />
          </div>
          <img
            src="/landing/footer/playStore.png"
            alt="M-Knows Logo"
            className="rounded-3xl w-auto h-20"
          />
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-bold pb-4">Halaman</h2>
          <p className=" py-3 text-lg">Pelatihanku</p>
          <p className=" py-3 text-lg">Penugasan</p>
          <p className=" py-3 text-lg">Asesmen</p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-bold pb-4">Kontak</h2>
          <p className=" py-3 text-lg">+6285183004001</p>
          <p className=" py-3 text-lg">info@kampusgratis.com</p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-bold pb-4">Alamat</h2>
          <p className="text-lg">
            <span className="font-semibold">Utama</span> : Jl. Radio IV No.8B
            Barito Kebayoran Baru, Jakarta Selatan 12130
          </p>
          <p className="text-lg">
            <span className="font-semibold">Produksi</span> : Jl. Raya Cirendeu
            No.61, Tangerang Selatan 15419
          </p>
          <p className="text-lg">
            <span className="font-semibold">Cabang</span> : Jl. Raya Darmo
            Permai III Surabaya. 60119
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;