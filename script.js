document.getElementById('car-query-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const query = document.getElementById('car-query').value;
  const response = await fetch('/api/get-car', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  
  const carResult = document.getElementById('car-result');
  
  if (response.ok) {
    const car = await response.json();

    console.log(car);
    
    // Populate Section 1: Short Description and Image
    document.getElementById('short-description').innerHTML=` <p>The ${car.Model} is a pinnacle of luxury and performance, equipped with a formidable ${car.Engine} engine that churns out an impressive ${car.Horsepower} horsepower. This high-performance SUV accelerates from 0 to 60 mph in just ${car.Speed_0_to_60} seconds and boasts a top speed of ${car.Top_Speed}, making it a thrilling drive. Designed to accommodate up to ${car.Seating_Capacity} passengers, the ${car.Model} combines spaciousness with advanced technology and comfort. With a starting price of ${car.Price_USD}, it offers a blend of opulence and power that stands out in the luxury SUV market, ensuring a premium driving experience.</p>` ;
    document.getElementById('car-img').src = car.img;
    document.getElementById('car-img').alt = `${car.Brand} ${car.Model}`;

    // Populate Section 2: Commercial Video
    document.getElementById('commercial').src = car.commercial;

    // Populate Section 3: Long Description
    document.getElementById('long-description').innerHTML=`<p>Sports cars are high-performance vehicles designed with a focus on speed, agility, and driving pleasure. Known for their sleek and aerodynamic designs, these cars offer a thrilling experience behind the wheel, catering to drivers who prioritize performance, style, and dynamic handling. Typically smaller and lighter than other vehicle types, sports cars are built to maximize power-to-weight ratios, which allows for better acceleration, braking, and cornering abilities.

At the core of any sports car is its engine, which is often the defining feature. Most sports cars come equipped with powerful engines, ranging from turbocharged four-cylinders to naturally aspirated V8s and V12s. These engines deliver impressive horsepower and torque, providing quick acceleration and high top speeds. Some high-end sports cars even feature hybrid or electric powertrains, which combine cutting-edge technology with performance, offering both sustainability and thrilling power. The engineering of these engines is crucial for providing the fast and responsive feel that sports car enthusiasts seek.

The design of sports cars is another key aspect that sets them apart from standard vehicles. Aesthetically, they feature low-slung, aerodynamic bodies designed to reduce air resistance and enhance speed and stability at high velocities. Materials such as carbon fiber and aluminum are frequently used to keep the car lightweight while maintaining structural integrity. The exterior often includes bold lines, aggressive front fascias, and wide rear fenders, all of which contribute to the car's performance and visual appeal. Inside, sports cars typically come with luxurious yet functional interiors, with high-quality materials such as leather, Alcantara, and carbon fiber trim. These cars prioritize the driving experience, often featuring cockpit-like cabins with driver-focused controls, high-tech infotainment systems, and sport-tuned seating.

One of the primary characteristics of sports cars is their ability to provide precise and responsive handling. This is achieved through advanced suspension systems, low center of gravity, and rear-wheel or all-wheel-drive configurations. The suspension is usually tuned for agility and cornering stability, allowing drivers to confidently navigate tight curves at higher speeds. Steering feedback is also fine-tuned to offer a direct and tactile connection to the road, ensuring that drivers feel in control at all times. High-performance brakes ensure that sports cars can stop as quickly as they accelerate, providing a balanced driving experience.

Beyond the performance and aesthetics, sports cars have a cultural and emotional appeal. They represent freedom, passion, and the thrill of pushing the limits of what a car can do. Many iconic brands, such as Ferrari, Lamborghini, Porsche, and Aston Martin, are known for their rich histories in the world of sports cars, often combining their racing heritage with road car innovation. These brands have cultivated a reputation for exclusivity, with many of their models being highly sought after by collectors and enthusiasts alike.

In recent years, the evolution of sports cars has expanded to include more technologically advanced features, such as adaptive aerodynamics, driver-assistance systems, and hybrid-electric drivetrains. However, despite these advancements, the core identity of sports cars remains the same: they are built to provide an exhilarating, high-performance driving experience that connects the driver with the road in a way few other vehicles can.

Sports cars continue to be a symbol of innovation, luxury, and driving excitement, appealing to a wide range of automotive enthusiasts worldwide. Whether cruising down a highway or tackling sharp turns on a race track, sports cars deliver a unique blend of performance and style that few other vehicles can match.</p>`;
  } else {
    carResult.innerHTML = '<p>No matching car found.</p>';
  }
});
