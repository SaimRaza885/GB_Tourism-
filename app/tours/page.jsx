import PageBanner from "@/components/PageBanner"
import ListingCard from "@/components/ListingCard"
import { tours } from "@/data/dummyData"
import { FaMountain } from "react-icons/fa"

export const metadata = {
  title: "Tours - Gilgit Tourism",
  description:
    "Explore our amazing tours in Gilgit-Baltistan. From Hunza Valley to Fairy Meadows, discover the beauty of Pakistan.",
}

export default function ToursPage() {
  return (
    <main>
      <PageBanner
        height="50vh"
        badge="Top Destinations"
        badgeIcon={FaMountain}
        title="Explore Our Tours"
        image="https://images.unsplash.com/photo-1549400813-982fe3929497?q=80&w=2070&auto=format&fit=crop"
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
  )
}
