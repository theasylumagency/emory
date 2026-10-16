export const services = [
  { id: "haircut", name: "შეჭრა", english: "Haircut", price: "50 ₾-დან", time: "45–60 წუთი", description: "ახალი ფორმა, პატარა ცვლილება ან უბრალოდ ბოლოები. ჯერ მოვისმენთ, მერე შევჭრით.", includes: "კონსულტაცია · დაბანა · შეჭრა · დავარცხნა" },
  { id: "color", name: "ფერი", english: "Color", price: "120 ₾-დან", time: "120–180 წუთი", description: "სხვა ტონი თუ სრულიად ახალი ფერი — დავიწყოთ შენი თმის მდგომარეობით და შედეგით, რომელიც გინდა.", includes: "კონსულტაცია · ფერის შერჩევა · შეღებვა · მოვლა" },
  { id: "barber", name: "ბარბერი", english: "Barber", price: "35 ₾-დან", time: "30–45 წუთი", description: "ზუსტი კონტური, ბუნებრივი ტექსტურა და ფორმა, რომელიც მეორე დღესაც მუშაობს.", includes: "კონსულტაცია · შეჭრა · კონტურის დამუშავება" },
  { id: "nails", name: "ფრჩხილები", english: "Nails", price: "40 ₾-დან", time: "45–75 წუთი", description: "მოკლე, გრძელი, მშვიდი თუ ხმამაღალი. მოვლილი ხელები შენი ხასიათით.", includes: "ფორმა · მანიკური · სასურველი საფარი" },
  { id: "care", name: "მოვლა", english: "Care", price: "60 ₾-დან", time: "45–60 წუთი", description: "ზოგჯერ თმას კიდევ ერთი ცვლილების ნაცვლად შესვენება სჭირდება. ერთად შევარჩიოთ შესაბამისი მოვლა.", includes: "თმის შეფასება · ინდივიდუალური მოვლა · რეკომენდაციები" },
  { id: "consultation", name: "ჯერ არ ვიცი", english: "Let’s talk", price: "ფასი დაზუსტდება", time: "20–30 წუთი", description: "ფოტო გაქვს? იდეა? ან უბრალოდ ცვლილება გინდა? მოდი, ერთად გავარკვიოთ.", includes: "სურვილების განხილვა · თმის შეფასება · შემდეგი ნაბიჯის დაგეგმვა" },
] as const;
export type ServiceId = typeof services[number]["id"];

// Illustrative profiles. Replace with the confirmed Emory roster before launch.
export const specialists = [
  { id: "ana", name: "ანა", role: "ფერი და ტონის კორექცია", situation: "„ფერი შესასწორებელი მაქვს.“", description: "ჯერ ვარკვევთ, რა მოხდა. მერე ვგეგმავთ, როგორ მივიდეთ შენს ფერამდე ისე, რომ თმაც კარგად იყოს.", service: "color" as ServiceId, x: "20%", y: "53%" },
  { id: "tako", name: "თაკო", role: "შეჭრა და ფორმა", situation: "„ცვლილება მინდა. მაგრამ რა?“", description: "შენი თმა, ყოველდღიური რიტმი და ის, რაც მოგწონს — კარგი ფორმა ამ სამით იწყება.", service: "haircut" as ServiceId, x: "49%", y: "58%" },
  { id: "gio", name: "გიო", role: "ბარბერი და ტექსტურა", situation: "„მინდა, სახლშიც ასე გამოიყურებოდეს.“", description: "შეჭრა, რომელსაც დილით დიდხანს არ უნდა ეჩხუბო. ბუნებრივი ტექსტურა და შენზე მორგებული ფორმა.", service: "barber" as ServiceId, x: "79%", y: "68%" },
] as const;

export const stories = [
  { title: "ახალი ფორმა.\nიგივე ხასიათი.", tab: "ფორმა, რომელიც შენია", image: "/images/copper-bob-concept.png", alt: "ტექსტურული სპილენძისფერი ბობის კონცეპტუალური ფოტო", tag: "შეჭრა + ფერი", wanted: "მეტი მოძრაობა და თბილი ფერი, ყოველდღიური რთული დავარცხნის გარეშე.", approach: "მკვეთრი გაღიავების ნაცვლად — სპილენძის ტონი. მძიმე კონტურის ნაცვლად — რბილი ფენები, რომლებიც ბუნებრივ ტექსტურას მიჰყვება.", time: "დაახლოებით 2.5 საათი", price: "170 ₾-დან", stylist: "თაკო + ანა", service: "color" as ServiceId },
  { title: "პირველად მოკლე.\nისევ შენ.", tab: "პირველი მოკლე შეჭრა", image: "/images/emory-editorial.png", alt: "მოკლე შაგის შეჭრის სარედაქციო კონცეფცია", tag: "შეჭრა", wanted: "დიდი ცვლილება, მაგრამ ისეთი, რომელშიც თავს ბუნებრივად იგრძნობს.", approach: "ძალიან მოკლე ფორმაზე ერთბაშად გადასვლის ნაცვლად — ნიკაპის სიგრძის შაგი, რბილი ჩოლკითა და თავისუფალი მოძრაობით.", time: "დაახლოებით 1 საათი", price: "50 ₾-დან", stylist: "თაკო", service: "haircut" as ServiceId },
  { title: "ჯერ მოვლა.\nმერე ცვლილება.", tab: "როცა სწორი პასუხია „ჯერ არა“", image: "/images/copper-bob-concept.png", alt: "ბუნებრივი თმის ტექსტურის საილუსტრაციო ფოტო", tag: "კონსულტაცია + მოვლა", wanted: "უფრო ღია ფერი, უკვე დასუსტებულ თმაზე.", approach: "შესაძლო დაზიანების გამო გაღიავებას გადავდებდით. ჯერ მოვლა, დაზიანებული ბოლოების შეჭრა და შემდეგ ფერის ეტაპობრივი ცვლილების გეგმა.", time: "დაახლოებით 1 საათი", price: "60 ₾-დან", stylist: "ანა", service: "care" as ServiceId },
] as const;
export const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Emory+Barber+Beauty+10+Givi+Kartozia+Tbilisi";
