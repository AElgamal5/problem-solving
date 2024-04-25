/**
 * 1396. Design Underground System
 * -----------------------
 * link: https://leetcode.com/problems/design-underground-system/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

class UndergroundSystem {
  constructor() {
    this.passengersMap = new Map();
    this.stationsMap = new Map();
  }

  /**
   * @param {number} id
   * @param {string} stationName
   * @param {number} t
   * @return {void}
   */
  checkIn(id, stationName, t) {
    this.passengersMap.set(`${id}-in`, { station: stationName, time: t });
  }

  checkOut(id, stationName, t) {
    this.passengersMap.set(`${id}-out`, { station: stationName, time: t });
    let checkInData = this.passengersMap.get(`${id}-in`);

    let count = 1;
    let diffTime = t - checkInData.time;

    if (this.stationsMap.has(`${checkInData.station}->${stationName}`)) {
      let oldTrip = this.stationsMap.get(
        `${checkInData.station}->${stationName}`
      );
      count += oldTrip.count;
      diffTime += oldTrip.diffTime;
    }

    this.stationsMap.set(`${checkInData.station}->${stationName}`, {
      diffTime,
      count,
    });
  }

  /**
   * @param {string} startStation
   * @param {string} endStation
   * @return {number}
   */
  getAverageTime(startStation, endStation) {
    let trip = this.stationsMap.get(`${startStation}->${endStation}`);
    return trip.diffTime / trip.count;
  }
}

let undergroundSystem = new UndergroundSystem();

undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15); // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20); // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14

console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); //14
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); //11
undergroundSystem.checkIn(10, "Leyton", 24);
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // 11
undergroundSystem.checkOut(10, "Waterloo", 38); // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); //12
