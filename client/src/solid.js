import './style.css'

const sectionPage = ``;
const slideFrame = `bg-zinc-100 rounded-2xl w-full h-fit`;
const hoverEffect = `transform hover:scale-102 transition-transform duration-100`;
const codeSnippet = `language-ts`;
const titleBadge = `bg-gradient-to-r from-slate-950 to-indigo-950 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mr-6 shadow-lg`;

document.querySelector('#solid').innerHTML = `
  <main class="h-full w-full bg-black/5">
      <div class="max-w-6xl mx-auto p-5">
          <!-- Title Slide -->
          <section class="section-page ${sectionPage}">
            <div class="${slideFrame} shadow-2xl mb-8 p-12 text-center ${hoverEffect}">
                <h1 class="text-5xl md:text-6xl font-bold text-slate-800 mb-6">SOLID</h1>
                <p class="text-xl md:text-2xl text-slate-600 mb-4">Building Better Software Through Better Design</p>
                <p class="text-lg text-slate-500">A Developer's Guide to Object-Oriented Design</p>
            </div>
          </section>

          <!-- Introduction -->
          <section class="section-page ${sectionPage}">
            <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                <h2 class="text-3xl font-bold text-blue-800 mb-6 border-b-4 border-blue-800 pb-3">What are SOLID Principles?</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-8">SOLID is an acronym for five design principles that make software designs more understandable, flexible, and maintainable. These principles were introduced by Robert C. Martin (Uncle Bob) and are fundamental to object-oriented programming and design.</p>
                
                <div class="bg-gradient-to-r from-sky-900 to-indigo-800 text-white p-8 rounded-xl">
                    <h3 class="text-xl font-semibold mb-6">Why SOLID Matters</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Reduces code complexity and increases readability</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Makes code more maintainable and extensible</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Reduces coupling between components</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Improves testability</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Facilitates better team collaboration</span>
                        </li>
                    </ul>
                </div>
            </div>
          </section>

            <!-- Single Responsibility Principle -->
          <section class="section-page ${sectionPage}">
            <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                <div class="flex items-center mb-8">
                    <div class="${titleBadge}">S</div>
                    <div>
                        <h2 class="text-3xl font-bold text-blue-800">Single Responsibility Principle (SRP)</h2>
                        <p class="text-lg font-medium text-gray-600 italic">Every software component should have one and only one responsibility.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-6 w-full justify-around items-center">
                    <img src="/imgs/swiss-knife.png" alt="swiss knife" class="w-[480px]  h-[480px]" />
                    <img src="/imgs/saw.png" alt="saw" class="w-[500px] h-[260px]" />
                </div>
            </div>
          </section>

          <!-- Single Responsibility Principle -->
          <section class="section-page ${sectionPage}">

                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">S</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Single Responsibility Principle (SRP)</h2>
                            <p class="text-lg font-medium text-gray-600 italic">Cohesion</p>
                        </div>
                    </div>
                
                    <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <div class="font-bold text-red-700 mb-4 flex items-center">
                            <span class="mr-2">❌</span>
                            Bad Example - Multiple Responsibilities. Low level of cohesion.
                        </div>
                        <pre class="${codeSnippet}">
            <code>      public class Square {
            int sideLength = 5;

            public int calculateArea() {
                return sideLength * sideLength;
            }

            public int calculatePerimeter() {
                return 4 * sideLength;
            }

            public void drawSquare() {
                // check if graphics library is available
                // check screen resolution
                // draw the square on screen
            }

            public void moveSquare(int x, int y) {
                // update square position
                // redraw square
            }

            public void rotateSquare(int angle) {
                // rotate square by angle
                // redraw square
            }

            public void animateSquare() {
                // move and rotate square over time
            }          
        }
        </code>
        </pre>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div class="font-bold text-green-700 mb-4 flex items-center">
                <span class="mr-2">✅</span>
                High cohesion. Helps to adhere to SRP.
            </div>
        <pre class="${codeSnippet}"><code>      
        // shape
        public class Square {
            int sideLength = 5;

            public int calculateArea() {
                return sideLength * sideLength;
            }

            public int calculatePerimeter() {
                return 4 * sideLength;
            }
        }

        </code>

        <code>

        // rendering and animation
        public class SquareUI {
            public void drawSquare() {
                // check if graphics library is available
                // check screen resolution
                // draw the square on screen
            }

            public void moveSquare(int x, int y) {
                // update square position
                // redraw square
            }

            public void rotateSquare(int angle) {
                // rotate square by angle
                // redraw square
            }

            public void animateSquare() {
                // move and rotate square over time
            }   
        }
        </code>
        </pre>
        </div>
        </div>
        </section>

        <!-- Single Responsibility Principle -->
          <section class="section-page ${sectionPage}">
            <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                <div class="flex items-center mb-8">
                    <div class="${titleBadge}">S</div>
                    <div>
                        <h2 class="text-3xl font-bold text-blue-800">Single Responsibility Principle (SRP)</h2>
                        <p class="text-lg font-medium text-gray-600 italic">Coupling</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-6 w-full justify-around items-center">
                    <img src="/imgs/landline.png" alt="landline" class="w-[520px]  h-[480px] rounded-lg" />
                </div>
            </div>
          </section>


                  <!-- Single Responsibility Principle -->
              <section class="section-page ${sectionPage}">

                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">S</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Single Responsibility Principle (SRP)</h2>
                            <p class="text-lg font-medium text-gray-600 italic">Coupling</p>
                        </div>
                    </div>
                
                    <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <div class="font-bold text-red-700 mb-4 flex items-center">
                            <span class="mr-2">❌</span>
                            Bad Example - Multiple Responsibilities. High level of coupling.
                        </div>
                        <pre class="${codeSnippet}">
            <code>
            public class OrderService {
                public void processOrder(Order order) {
                    // processing payment
                    PayPalAPI paypal = new PayPalAPI("api-key");
                    paypal.chargeCard(order.getTotal());

                    // business logic mixed with database concerns
                    Connection conn = DriverManager.getConnection("jdbc:mysql://db.connection");
                    PreparedStatement stmt = conn.prepareStatement("INSERT INTO orders...");
                    stmt.setString(1, order.getCustomerId());
                    stmt.executeUpdate();

                    // email logic
                    SMTPClient client = new SMTPClient("smtp.gmail.com");
                    client.sendEmail(order.getCustomerEmail(), "Order confirmed");
                }
            }
            </code>
            </pre>
            </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div class="font-bold text-green-700 mb-4 flex items-center">
                <span class="mr-2">✅</span>
                Low coupling. Helps to adhere to SRP.
            </div>
        <pre class="${codeSnippet}">
        <code>
            public class PaymentService {
                public boolean processPayment(Order order) {
                    PayPalAPI paypal = new PayPalAPI("api-key");
                    return paypal.chargeCard(order.getTotal());
                }
            }
        </code>

        <code>
            public class OrderRepository {
                public void saveOrder(Order order) throws SQLException {
                    Connection conn = DriverManager.getConnection("jdbc:mysql://db.connection");
                    PreparedStatement stmt = conn.prepareStatement("INSERT INTO orders...");
                    stmt.setString(1, order.getCustomerId());
                    stmt.executeUpdate();
                    conn.close();
                }
            }
        </code>

        <code>
            public class EmailService {
                public void sendConfirmationEmail(Order order) {
                    SMTPClient client = new SMTPClient("smtp.gmail.com");
                    client.sendEmail(order.getCustomerEmail(), "Order confirmed");
                }
            }
        </code>
        <code>

            public class OrderServiceExample {
                public static void main(String[] args) {
                    // create dependencies
                    PaymentService paymentService = new PaymentService();
                    OrderRepository orderRepository = new OrderRepository();
                    EmailService emailService = new EmailService();
                    
                    // inject dependencies into OrderService
                    OrderService orderService = new OrderService(
                        paymentService, 
                        orderRepository, 
                        emailService
                    );
                    
                    // process order
                    Order order = new Order("customer123", 99.99, "customer@email.com");
                    orderService.processOrder(order);
                }
            }

        </code>
        </pre>
        </div>
        </div>
        </section>


        <!-- Open/Closed Principle -->
        <section class="section-page ${sectionPage}">
        <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
            <div class="flex items-center mb-8">
                <div class="${titleBadge}">O</div>
                <div>
                    <h2 class="text-3xl font-bold text-blue-800">Open/Closed Principle (OCP)</h2>
                    <p class="text-lg text-gray-600 italic">Software components should be closed for modification, but open for extension.</p>
                </div>
            </div>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                <div class="font-bold text-red-700 mb-4 flex items-center">
                    <span class="mr-2">❌</span>
                    Bad Example - Modifying Existing Code
                </div>
                <pre class="${codeSnippet}">
        <code>
            // initial implementation
            public class PremiumMembershipDiscountCalculator {
                public int calculateDiscount(KennelMembershipProfile membership) {

                    if (membership.getType() == MembershipType.PREMIUM) {
                        return 25; // 25% discount for premium members
                    }

                    return 0;
                }
            }

            // kennel membership profile
            public class KennelMembershipProfile {
                private MembershipType type;
                // more logic here

                public MembershipType getType() {
                    return type;
                }

            }
        </code>

        <hr class="my-3 border-red-200"/>

        <code>
            // kennel membership profile
            public class KennelMembershipProfile {
                private MembershipType type;
                // more logic here

                public MembershipType getType() {
                    return type;
                }
            }

            // NEW membership profile
            public class HorseMembershipProfile {
                private MembershipType type;
                // more logic here

                public MembershipType getType() {
                    return type;
                }
            }
        </code>

        <code>
            // extending to add new membership type
            public class PremiumMembershipDiscountCalculator {
                public int calculateDiscount(KennelMembershipProfile membership) {

                    if (membership.getType() == MembershipType.PREMIUM) {
                        return 25;
                    }

                    return 0;
                }

                // overloading method to handle new membership type
                public int calculateDiscount(HorseMembershipProfile membership) {

                    if (membership.getType() == MembershipType.PREMIUM) {
                        return 25;
                    }

                    return 0;
                }
            }

            </code>
            </pre>
            </div>

                    <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <div class="font-bold text-green-700 mb-4 flex items-center">
                            <span class="mr-2">✅</span>
                            Good Example - Open for Extension
                        </div>
                        <pre class="${codeSnippet}">
            <code>        
            
            public interface IMembershipProfile {
                public boolean isPremiumMember();
            }

            </code>
            
            <code>

            public class KennelMembershipProfile implements IMembershipProfile {
                private MembershipType type;
                // more logic here

                public MembershipType getType() {
                    return type;
                }
                    
                @Override
                public boolean isPremiumMember() {
                    return type == MembershipType.PREMIUM;
                }
            }

            public class HorseMembershipProfile implements IMembershipProfile {
                private MembershipType type;
                // more logic here

                public MembershipType getType() {
                    return type;
                }
                    
                @Override
                public boolean isPremiumMember() {
                    return type == MembershipType.PREMIUM;
                }
            }

            </code>
            
            <code>
            public class PremiumMembershipDiscountCalculator {
                public int calculateDiscount(IMembershipProfile membership) {

                    if (membership.isPremiumMember()) {
                        return 25;
                    }

                    return 0;
                }
            }
            </code>
            </pre>
            </div>
                </div>
        </section>

          <!-- Liskov Substitution Principle -->
          <section class="section-page ${sectionPage}">
          <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
              <div class="flex items-center mb-8">
                  <div class="${titleBadge}">L</div>
                  <div>
                      <h2 class="text-3xl font-bold text-blue-800">Liskov Substitution Principle (LSP)</h2>
                      <p class="text-lg text-gray-600 italic">Objects of a superclass should be replaceable with their subtypes without affecting the correctness of the program.</p>
                  </div>
              </div>

              <p class="text-lg text-gray-700 leading-relaxed mb-6">Subclasses should be substitutable for their base classes. This means derived classes must not change the behavior expected from the base class.</p>

                <div class="flex flex-col md:flex-row gap-6 w-full justify-around items-center">
                    <img src="/imgs/bird.png" alt="swiss knife" class="w-[620px]  h-[480px]" />
                </div>
        </div>
        </section>

          <!-- Liskov Substitution Principle -->
          <section class="section-page ${sectionPage}">
          <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
              <div class="flex items-center mb-8">
                  <div class="${titleBadge}">L</div>
                  <div>
                      <h2 class="text-3xl font-bold text-blue-800">Liskov Substitution Principle (LSP)</h2>
                      <p class="text-lg text-gray-600 italic">Objects of a superclass should be replaceable with their subtypes without affecting the correctness of the program."</p>
                  </div>
              </div>


              <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                  <div class="font-bold text-red-700 mb-4 flex items-center">
                      <span class="mr-2">❌</span>
                      Bad Example - LSP Violation
                  </div>
                  <pre class="${codeSnippet}">
          <code>  
            public abstract class Bird {
                public void fly() { }

                public void makeSound() { }

                public void swim() { } 
            }
        </code>
        
        <code>
            // duck can fly, quack and swim
            public class Duck extends Bird {
                @Override
                public void fly() {
                    System.out.println("Duck is flying");
                }
                    
                @Override
                public void makeSound() {
                    System.out.println("Quack Quack");
                }
                    
                @Override
                public void swim() {
                    System.out.println("Duck is swimming");
                }
            }

        </code>
        
        <code>

            // rubber duck cannot fly, violates LSP
            public class RubberDuck extends Duck {
                @Override
                public void swim() {
                    System.out.println("Rubber Duck is floating on the water");
                }

                @Override
                public void makeSound() {
                    System.out.println("Squeak Squeak");
                }

                @Override
                public void fly() {
                    throw new UnsupportedOperationException("Rubber Duck cannot fly");
                }
            }

            // penguin cannot fly, violates LSP
            public class Penguin extends Bird {
                @Override
                public void swim() {
                    System.out.println("Penguin is swimming");
                }

                @Override
                public void makeSound() {
                    System.out.println("Penguin sound");
                }

                @Override
                public void fly() {
                    throw new UnsupportedOperationException("Penguin cannot fly");
                }
            }
            </code>

            <code>
            public class BirdUtils {

                Bird bird1 = new Duck();
                Bird bird2 = new RubberDuck();
                Bird bird3 = new Penguin();

                List< Bird > birds = new ArrayList<>();
                birds.add(bird1);
                birds.add(bird2);
                birds.add(bird3);   

                for (Bird bird : birds) {
                    bird.fly();
                    bird.makeSound();
                    bird.swim();
                }
            }

        </code>
      </pre>
        </div>

              <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <div class="font-bold text-green-700 mb-4 flex items-center">
                      <span class="mr-2">✅</span>
                      Good Example - Proper Substitution
                  </div>
                  <pre class="${codeSnippet}">
        <code>
            // new behavioral interfaces - segregated by capability
            public interface Flyable {
                void fly();
            }

            public interface Swimmable {
                void swim();
            }
        </code>

        <code>
            public abstract class Bird {
                public void makeSound() { }
            }

            public abstact class FlyingBird extends Bird implements Flyable {
                @Override
                public void fly() { }
            }

            public abstract class SwimmingBird extends Bird implements Swimmable {
                @Override
                public void swim() { }
            }

            public abstract class UltimateBird extends Bird implements Flyable, Swimmable {
                // keep unimplemented so subclasses must implement everything
            }
        </code>

        <code>
            public class Duck extends UltimateBird {
                @Override
                public void makeSound() {
                    System.out.println("Quack Quack");
                }
                
                @Override
                public void fly() {
                    System.out.println("Duck is flying");
                }
                
                @Override
                public void swim() {
                    System.out.println("Duck is swimming");
                }
            }
        </code>

        <code>
            public class Penguin extends SwimmingBird {
                @Override
                public void makeSound() {
                    System.out.println("Penguin sound");
                }
                
                @Override
                public void swim() {
                    System.out.println("Penguin is swimming");
                }
            }

        </code>
        </pre>
        </div>
        </div>
        </section>

                  <!-- Interface Segregation Principle -->
          <section class="section-page ${sectionPage}">
          <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
              <div class="flex items-center mb-8">
                  <div class="${titleBadge}">I</div>
                  <div>
                      <h2 class="text-3xl font-bold text-blue-800">Interface Segregation Principle (ISP)</h2>
                      <p class="text-lg text-gray-600 italic">No client should be forced to depend on methods it does not use.</p>
                  </div>
              </div>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">Create specific, focused interfaces rather than large, general-purpose ones.</p>

                <div class="flex flex-col md:flex-row gap-6 w-full justify-around items-center">
                    <img src="/imgs/foodpr.png" alt="food processor" class="w-[512px]  h-[512px]" />
                </div>

          </div>
          </section>

          <!-- Interface Segregation Principle -->
          <section class="section-page ${sectionPage}">
          <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
              <div class="flex items-center mb-8">
                  <div class="${titleBadge}">I</div>
                  <div>
                      <h2 class="text-3xl font-bold text-blue-800">Interface Segregation Principle (ISP)</h2>
                      <p class="text-lg text-gray-600 italic">No client should be forced to depend on methods it does not use.</p>
                  </div>
              </div>

              <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                  <div class="font-bold text-red-700 mb-4 flex items-center">
                      <span class="mr-2">❌</span>
                      Bad Example - Fat Interface
                  </div>
                  <pre class="${codeSnippet}">
            <code>  
                public interface ISmartAppliance {
                    public void steer();
                    public void chop();
                    public void blend();
                    public void grind();
                }
            </code>

            <code>
                public class FoodProcessor implements ISmartAppliance {  
                    public void steer() { /* Implementation */ }
                    public void chop() { /* Implementation */ }
                    public void blend() { /* Implementation */ }
                    public void grind() { /* Implementation */ }
                }
            </code>

            <code>
            public class Blender implements ISmartAppliance {  
                public void blend() { /* Implementation */ }

                public void steer() { throw new UnsupportedOperationException("Not supported"); }
                public void chop() { throw new UnsupportedOperationException("Not supported"); }
                public void grind() { throw new UnsupportedOperationException("Not supported"); }
            }
            </code>

            <code>
            public class CoffeeGrinder implements ISmartAppliance {
                public void grind() { /* Implementation */ }

                public void steer() { throw new UnsupportedOperationException("Not supported"); }
                public void chop() { throw new UnsupportedOperationException("Not supported"); }
                public void blend() { throw new UnsupportedOperationException("Not supported"); }
            }
            </code>

            <code>
                // client code
                public class SmartKitchen {
                    private ISmartAppliance appliance;

                    public SmartKitchen(ISmartAppliance appliance) {
                        this.appliance = appliance;
                    }

                    public void prepareMeal() {
                        appliance.chop();
                        appliance.blend();
                        appliance.grind();
                    }
                }
            </code>
            </pre>
            </div>

              <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <div class="font-bold text-green-700 mb-4 flex items-center">
                      <span class="mr-2">✅</span>
                      Good Example - Segregated Interfaces
                  </div>
                  <pre class="${codeSnippet}">
              <code>
                public interface ISteerable {
                    public void steer();
                }
                
                public interface IChoppable {
                    public void chop();
                }
                
                public interface IBlendable {
                    public void blend();
                }
                
                public interface IGrindable {
                    public void grind();
                }
                </code>
                <code>
                
            public class FoodProcessor implements ISteerable, IChoppable, IBlendable, IGrindable {
                public void steer() { /* Implementation */ }
                public void chop() { /* Implementation */ }
                public void blend() { /* Implementation */ }
                public void grind() { /* Implementation */ }
            }

            public class Blender implements IBlendable {
                public void blend() { /* Implementation */ }
            }

            public class CoffeeGrinder implements IGrindable {
                public void grind() { /* Implementation */ }
            }
              </code>
              </pre>
              </div>
          </div>
        </section>

          <!-- Dependency Inversion Principle -->
          <section class="section-page ${sectionPage}">
          <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
              <div class="flex items-center mb-8">
                  <div class="${titleBadge}">D</div>
                  <div>
                      <h2 class="text-3xl font-bold text-blue-800">Dependency Inversion Principle (DIP)</h2>
                      <p class="text-lg text-gray-600 italic">High-level modules should not depend on low-level modules. Both should depend on abstractions.</p>
                  </div>
              </div>

              <p class="text-lg text-gray-700 leading-relaxed mb-6">Depend on interfaces or abstract classes rather than concrete implementations. This reduces coupling and increases flexibility.</p>

              <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                  <div class="font-bold text-red-700 mb-4 flex items-center">
                      <span class="mr-2">❌</span>
                      Bad Example - Direct Dependency
                  </div>
                  <pre class="${codeSnippet}">
              <code>  class MySQLDatabase {
      save(data: string): void {
          console.log('Saving data to MySQL...');
      }
  }

  class UserService {
      private database: MySQLDatabase; // Depends on concrete implementation

      constructor() {
          this.database = new MySQLDatabase(); // Tightly coupled
      }

      createUser(userData: string): void {
          // Business logic here
          this.database.save(userData);
      }
  }</code></pre>
              </div>

              <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <div class="font-bold text-green-700 mb-4 flex items-center">
                      <span class="mr-2">✅</span>
                      Good Example - Dependency Inversion
                  </div>
                  <pre class="${codeSnippet}">
              <code>  interface Database {
      save(data: string): void;
  }

  class MySQLDatabase implements Database {
      save(data: string): void {
          console.log('Saving data to MySQL...');
      }
  }

  class PostgreSQLDatabase implements Database {
      save(data: string): void {
          console.log('Saving data to PostgreSQL...');
      }
  }

  class UserService {
      private database: Database; // Depends on abstraction

      constructor(database: Database) { // Dependency injection
          this.database = database;
      }

      createUser(userData: string): void {
          // Business logic here
          this.database.save(userData);
      }
  }

  // Usage - can easily switch implementations
  const mysqlDB = new MySQLDatabase();
  const userService = new UserService(mysqlDB);</code></pre>
              </div>
          </div>
        </section>

          <!-- Summary -->
          <section class="section-page ${sectionPage}">
            <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                <h2 class="text-3xl font-bold text-blue-800 mb-8 border-b-4 border-blue-800 pb-3">SOLID Principles Summary</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl text-center ${hoverEffect}">
                        <h4 class="text-xl font-semibold mb-3">Single Responsibility</h4>
                        <p>One class, one reason to change</p>
                    </div>
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl text-center ${hoverEffect}">
                        <h4 class="text-xl font-semibold mb-3">Open/Closed</h4>
                        <p>Open for extension, closed for modification</p>
                    </div>
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl text-center ${hoverEffect}">
                        <h4 class="text-xl font-semibold mb-3">Liskov Substitution</h4>
                        <p>Subtypes must be substitutable for their base types</p>
                    </div>
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl text-center ${hoverEffect}">
                        <h4 class="text-xl font-semibold mb-3">Interface Segregation</h4>
                        <p>Many specific interfaces are better than one general-purpose interface</p>
                    </div>
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl text-center ${hoverEffect} md:col-span-2 lg:col-span-1">
                        <h4 class="text-xl font-semibold mb-3">Dependency Inversion</h4>
                        <p>Depend on abstractions, not concretions</p>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-xl mb-8">
                    <h3 class="text-xl font-semibold mb-6">Applying SOLID Principles Results In</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>More maintainable and readable code</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Better testability and easier unit testing</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Reduced coupling between components</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Increased flexibility and extensibility</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Better team collaboration and code reviews</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Reduced bugs and easier debugging</span>
                        </li>
                    </ul>
                </div>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Remember</h3>
                <p class="text-lg text-gray-700 leading-relaxed">SOLID principles are guidelines, not rigid rules. Apply them judiciously and consider the context of your project. Over-engineering simple solutions can be as problematic as under-engineering complex ones. Start with simple, working code and refactor using SOLID principles when complexity grows.</p>
            </div>
          </section>
      </div>
  </main>
`
