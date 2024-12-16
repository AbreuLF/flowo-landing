"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import Image from "next/image";
import { VideoPlayer } from "./video-player";

const videos = [
  {
    title: "Introdução ao Flowo",
    thumbnail: "/videos/intro-flowo.jpg",
    duration: "10:23",
    category: "Primeiros Passos",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Exemplo de URL, substitua pela URL real do vídeo
  },
  {
    title: "Configurando Integrações",
    thumbnail: "/videos/integracoes.jpg",
    duration: "15:47",
    category: "Integrações",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Exemplo de URL, substitua pela URL real do vídeo
  },
  {
    title: "Análise de Dados Avançada",
    thumbnail: "/videos/analise-dados.jpg",
    duration: "20:15",
    category: "Análise de Dados",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Exemplo de URL, substitua pela URL real do vídeo
  },
  {
    title: "Otimizando o Fluxo de Trabalho",
    thumbnail: "/videos/otimizacao.jpg",
    duration: "18:32",
    category: "Produtividade",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Exemplo de URL, substitua pela URL real do vídeo
  },
  {
    title: "Gerenciando Equipes no Flowo",
    thumbnail: "/videos/gestao-equipe.jpg",
    duration: "22:10",
    category: "Gestão de Equipe",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Exemplo de URL, substitua pela URL real do vídeo
  },
  {
    title: "Melhores Práticas de Segurança",
    thumbnail: "/videos/seguranca.jpg",
    duration: "12:45",
    category: "Segurança",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Exemplo de URL, substitua pela URL real do vídeo
  },
];

export function VideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(
    null
  );

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Vídeos Recentes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {video.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <VideoPlayer
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
