import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageHeader from "@/components/PageHeader"
import ListingCard from "@/components/ListingCard"
import { tours } from "@/data/dummyData"

export const metadata = {
  title: "Tours - Gilgit Tourism",
  description:
    "Explore our amazing tours in Gilgit-Baltistan. From Hunza Valley to Fairy Meadows, discover the beauty of Pakistan.",
}

export default function ToursPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Explore Our Tours"
          subtitle="Top Destinations"
          description="Discover the breathtaking beauty of Gilgit-Baltistan with our carefully curated tours."
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {tours.map((tour) => (
                <ListingCard key={tour.id} item={tour} type="tour" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
