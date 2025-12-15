import { useState } from 'react';

function NewsPage() {
  // CONFIGURACIÓN DE LA NOTICIA - EDITA AQUÍ
  const [newsData] = useState({
    title: "Helicóptero artillado ataca sicarios en la sierra de Michoacán",
    category: "Seguridad",
    location: "Michoacán",
    // Agrega aquí todas las imágenes que quieres mostrar
    images: [
      "/src/assets/noticia1.jpg",
      "/src/assets/noticia2.jpg",
      "/src/assets/noticia3.jpg"
    ]
  });

  // Control del carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === newsData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? newsData.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg border-b-4 border-yellow-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <img 
                src="/src/assets/logo.jpg" 
                alt="TecnoTrade News Logo" 
                className="h-16 w-16 object-contain rounded"
              />
              <div>
                <h1 className="text-3xl font-bold text-yellow-400">TecnoTrade News</h1>
                <p className="text-sm text-gray-300">Noticias en tiempo real</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-red-500 font-bold text-lg">● EN VIVO</div>
              <div className="text-sm text-gray-300">Ciudad Lázaro Cárdenas, Michoacán</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 border-b-2 border-gray-700">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-1">
            <li className="px-6 py-3 bg-blue-700 text-white font-semibold cursor-not-allowed">
              Inicio
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 transition cursor-not-allowed opacity-60">
              Nacional
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 transition cursor-not-allowed opacity-60">
              Internacional
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 transition cursor-not-allowed opacity-60">
              Seguridad
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 transition cursor-not-allowed opacity-60">
              Deportes
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 transition cursor-not-allowed opacity-60">
              Tecnología
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
            🔴 {newsData.category} - {newsData.location}
          </span>
        </div>

        {/* News Title */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-yellow-400 drop-shadow-lg">
          {newsData.title}
        </h2>

        {/* Main Image with Carousel */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-yellow-500 group">
          {/* Imagen principal */}
          <img 
            src={newsData.images[currentImageIndex]}
            alt={`${newsData.title} - Imagen ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover cursor-pointer transition-transform duration-300"
            style={{ maxHeight: '600px' }}
            onClick={nextImage}
          />
          
          {/* Botón anterior */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold transition-all opacity-0 group-hover:opacity-100"
          >
            ‹
          </button>

          {/* Botón siguiente */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold transition-all opacity-0 group-hover:opacity-100"
          >
            ›
          </button>

          {/* Indicadores de imagen */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-3">
            {newsData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-yellow-500 w-8' 
                    : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>

          {/* Contador de imágenes */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold">
            {currentImageIndex + 1} / {newsData.images.length}
          </div>

          {/* Overlay inferior */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
            <p className="text-xl text-white">
              📍 Reportando desde la zona del conflicto
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Click en la imagen o usa las flechas para cambiar
            </p>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="mt-6 bg-red-600 text-white py-3 px-4 rounded flex items-center">
          <span className="font-bold mr-4 text-lg">ÚLTIMA HORA:</span>
          <span className="text-lg">Continúa la cobertura en vivo del incidente...</span>
        </div>
      </main>

      {/* Footer - Espacio amplio para webcam */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-t-4 border-yellow-500 mt-auto">
        <div className="container mx-auto px-4 py-8">
          {/* Webcam Space Indicator */}
          <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-8 mb-6 text-center">
            <div className="text-6xl mb-4">📹</div>
            <p className="text-2xl font-bold text-yellow-400 mb-2">ESPACIO PARA WEBCAM</p>
            <p className="text-gray-400">Aquí aparecerá tu transmisión en vivo</p>
          </div>

          {/* Footer Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-yellow-400 font-bold text-xl mb-3">TecnoTrade News</h3>
              <p className="text-gray-400 text-sm">
                Tu fuente confiable de noticias en tiempo real desde Michoacán
              </p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-3">Contacto</h4>
              <p className="text-gray-400 text-sm">📧 contacto@tecnotradenews.com</p>
              <p className="text-gray-400 text-sm">📱 WhatsApp: +52 123 456 7890</p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-3">Síguenos</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
                  f
                </div>
                <div className="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition">
                  𝕏
                </div>
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                  ▶
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
            <p>&copy; 2024 TecnoTrade News. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewsPage;