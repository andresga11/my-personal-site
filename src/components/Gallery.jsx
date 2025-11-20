import StackedGallery from "./StackedGallery";
// import d from "../assets/dog.png";

const demoImages = [ "https://picsum.photos/200/300", "https://picsum.photos/200/301", "https://picsum.photos/200/302", "https://picsum.photos/200/303", "https://picsum.photos/200/304"];

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