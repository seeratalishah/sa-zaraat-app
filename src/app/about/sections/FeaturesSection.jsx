import SectionHeading from "@/components/SectionHeading";

export default function FeaturesSection() {
  return (
    <section className="mt-24 bg-green-100 py-16">
      <SectionHeading title="Why Choose Us" />
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {/* Feature Card */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 border bg-white border-gray-200 rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:bg-green-500"
            >
              <div className="flex items-start space-x-4">
                {/* Icon Placeholder - Replace with your own SVGs or Icons */}
                <div className="text-green-600 text-4xl group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Pure & Fresh Ingredients",
    description:
      "We ensure the highest quality by using only the freshest and purest ingredients in our products.",
    icon: "🌿",
  },
  {
    title: "Healthy Living for Everyone",
    description:
      "Our products support a healthy lifestyle, providing essential nutrients for you and your family.",
    icon: "🥦",
  },
  {
    title: "Fast & Reliable Delivery",
    description:
      "Get your favorite organic products delivered quickly and reliably, straight to your doorstep.",
    icon: "🚚",
  },

  {
    title: "Sustainable & Eco-Friendly",
    description:
      "We are committed to sustainability, using eco-friendly packaging and ethical sourcing.",
    icon: "♻️",
  },
];
