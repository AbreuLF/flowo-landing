"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function ResourceSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-2">
          <Input
            type="text"
            placeholder="Busque por guias, vídeos, tutoriais..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </form>
      </div>
    </section>
  );
}
