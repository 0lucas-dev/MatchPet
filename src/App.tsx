import { Heart, Menu, PawPrint, Search, Shield, Info, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-rose-500 p-2 rounded-xl">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">MatchPet</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#" className="hover:text-rose-600 transition-colors">Adopt</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Donate</a>
            <a href="#" className="hover:text-rose-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-900 h-10 px-4 py-2">
              Log in
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 bg-rose-600 text-white hover:bg-rose-700 h-10 px-4 py-2 shadow-sm">
              Adopt Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold w-fit">
              <Heart className="w-4 h-4" />
              <span>Over 1,000 pets found homes</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.1]">
              Find your new <span className="text-rose-600">best friend</span> today.
            </h1>
            <p className="text-lg text-neutral-600 md:text-xl leading-relaxed max-w-[600px]">
              MatchPet connects you with adorable rescue animals in your area. Give a loving home to a furry friend and change a life forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 bg-rose-600 text-white hover:bg-rose-700 h-12 px-8 shadow-md hover:shadow-lg gap-2 cursor-pointer">
                Find a Pet <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 bg-white border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-900 h-12 px-8 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-orange-100 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="/hero.png" 
              alt="Happy dog and cat" 
              className="rounded-[2rem] shadow-2xl object-cover w-full h-[400px] md:h-[500px] border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="bg-white py-24 border-y border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Featured Friends</h2>
            <p className="text-neutral-600 max-w-2xl text-lg">Meet some of our adorable pets looking for their forever homes right now.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Luna", type: "Dog", breed: "Golden Retriever Mix", age: "2 months", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400&h=300" },
              { name: "Milo", type: "Cat", breed: "Domestic Shorthair", age: "1 year", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400&h=300" },
              { name: "Bella", type: "Dog", breed: "French Bulldog", age: "3 years", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=300" },
              { name: "Leo", type: "Cat", breed: "Maine Coon", age: "6 months", image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=400&h=300" },
            ].map((pet, i) => (
              <div key={i} className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={pet.image} alt={pet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl text-neutral-900">{pet.name}</h3>
                      <p className="text-sm text-neutral-500">{pet.breed}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-neutral-100 text-neutral-800">
                      {pet.age}
                    </span>
                  </div>
                  <button className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 bg-rose-50 text-rose-700 hover:bg-rose-100 h-10 px-4 py-2 cursor-pointer">
                    Meet {pet.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-2">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Smart Matching</h3>
            <p className="text-neutral-600">Our algorithm helps match you with a pet that fits your lifestyle perfectly.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-2">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Verified Shelters</h3>
            <p className="text-neutral-600">We only work with registered and trusted animal shelters and rescues.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-2">
              <Info className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Full Support</h3>
            <p className="text-neutral-600">Get guidance, resources, and 24/7 support after you adopt your pet.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <PawPrint className="w-6 h-6 text-rose-500" />
              <span className="text-xl font-bold text-white tracking-tight">MatchPet</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-sm">© 2026 MatchPet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}