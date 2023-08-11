import Image from "next/image";

export default async function Playground() {
  const image = await fetch(
    "http://localhost:8080/products/79532834-2a82-4bdb-bd1d-9fdeb4dd2521/image",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2JzdG9uZXIxOUBnbWFpbC5jb20iLCJpYXQiOjE2OTE3NDUzNzgsImV4cCI6MTY5MTgzMTc3OH0.5nSWY9xpLDkv40OxX-kO3ilOsS-ncw17J1Rtq5NbNXY",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.blob();
    }
  });

  if (!image) {
    return <div>loading...</div>;
  }

  console.log(image);

  const imageUrl = URL.createObjectURL(image);

  console.log(imageUrl);

  return (
    <div className="py-16 bg-gray-800">
      <h1>Playground</h1>
      <Image src={imageUrl} alt="test" width={200} height={200} />
    </div>
  );
}
