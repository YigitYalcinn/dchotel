const RoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all">
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{room.name}</h2>
        <p className="text-gray-600">{room.description}</p>
        <p className="text-blue-600 font-semibold mt-2">₺{room.price} / gece</p>
        <a
          href="/reserve"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Rezerve Et
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
