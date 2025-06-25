function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const perKmCharge = 15;
  const distanceFare = distanceInKm * perKmCharge;
  const totalFare = baseFare + distanceFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(input));
