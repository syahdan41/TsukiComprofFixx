import "./CarouselItem.css";

export default function CarouselItem({ image }) {
  return (
    <div>
      <div className="shadow slide-item transition-all">
        <img src={image} className="object-cover h-48 rounded kelas-foto" alt="picture" />
      </div>
    </div>
  );
}
