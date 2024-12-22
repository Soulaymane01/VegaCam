export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">À Propos</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8">
            Viga Cam offre des services d'installation de caméras de sécurité et de climatisation de haute qualité depuis plus d'une décennie. 
            Nous sommes fiers de notre expertise et de notre engagement à fournir des solutions sur mesure pour répondre à vos besoins spécifiques.
          </p>
          <div className="about-image">
            {/* You can add an image here if needed */}
          </div>
        </div>
      </div>
    </section>
  )
}

