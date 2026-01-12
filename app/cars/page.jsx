import PageHeader from "@/components/PageHeader"
import ListingCard from "@/components/ListingCard"
import { cars } from "@/data/dummyData"

export const metadata = {
  title: "Car Rentals - Gilgit Tourism",
  description: "Rent cars for your Gilgit-Baltistan adventure. From 4x4 SUVs to economical sedans.",
}

export default function CarsPage() {
  return (
    <main>
      <PageHeader
        title="Car Rentals"
        subtitle="Transportation"
        description="Choose from our fleet of well-maintained vehicles for a comfortable journey through the mountains."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <ListingCard key={car.id} item={car} type="car" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
