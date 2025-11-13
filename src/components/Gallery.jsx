import StackedGallery from "./StackedGallery";
import d from "../assets/dog.png";

const demoImages = [ d, d, d, d, d, ];

export default function Gallery() {
  return (
    <main className="flex items-center justify-center p-6">
      <StackedGallery
        images={demoImages}
        width={360}
        height={480}
        borderRadius="1rem"
        maxAnimated={5}
        className="my-8"
      />
    </main>
  );
}