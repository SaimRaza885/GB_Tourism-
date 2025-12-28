export default function PageHeader({ title, subtitle, description }) {
  return (
    <section
      className="relative bg-primary-light py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkVwdRdlWd_-p-XDoRa53Zj4zU_BYsnPOOw&s')" }}
    >
      {/* gradient overlay (optional but recommended for better readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {subtitle && (
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {subtitle}
          </p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
