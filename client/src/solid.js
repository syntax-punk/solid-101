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
                        <li class="flex items-start">
                            <span class="text-green-300 font-bold text-xl mr-3">✓</span>
                            <span>Reduces technical debt over time</span>
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
                            <p class="text-lg text-gray-600 italic">"A class should have only one reason to change."</p>
                        </div>
                    </div>

                    <p class="text-lg text-gray-700 leading-relaxed mb-6">Each class should have only one job or responsibility. If a class has multiple responsibilities, changes to one responsibility might affect the others.</p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <div class="font-bold text-red-700 mb-4 flex items-center">
                            <span class="mr-2">❌</span>
                            Bad Example - Multiple Responsibilities
                        </div>
                        <pre class="${codeSnippet}">
            <code>      class User {
            private name: string;
            private email: string;

            constructor(name: string, email: string) {
                this.name = name;
                this.email = email;
            }

            // User data management
            getName(): string { return this.name; }
            getEmail(): string { return this.email; }

            // Database operations
            save(): void {
                // Save user to database
                console.log("Saving user to database...");
            }

            // Email operations
            sendEmail(message: string): void {
                // Send email logic
                console.log('Sending email');
            }
        }</code>
        </pre>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div class="font-bold text-green-700 mb-4 flex items-center">
                <span class="mr-2">✅</span>
                Good Example - Single Responsibility
            </div>
        <pre class="${codeSnippet}"><code>      // User entity - only handles user data
        class User {
            private name: string;
            private email: string;

            constructor(name: string, email: string) {
                this.name = name;
                this.email = email;
            }

            getName(): string { return this.name; }
            getEmail(): string { return this.email; }
        }

        // Separate class for database operations
        class UserRepository {
            save(user: User): void {
                console.log('Saving user to database...');
            }
        }

        // Separate class for email operations
        class EmailService {
            sendEmail(email: string, message: string): void {
                console.log('Sending email...');
            }
        }</code></pre>
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
                            <p class="text-lg text-gray-600 italic">"Software entities should be open for extension but closed for modification."</p>
                        </div>
                    </div>

                    <p class="text-lg text-gray-700 leading-relaxed mb-6">You should be able to extend a class's behavior without modifying its existing code. This is typically achieved through inheritance or composition.</p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <div class="font-bold text-red-700 mb-4 flex items-center">
                            <span class="mr-2">❌</span>
                            Bad Example - Modifying Existing Code
                        </div>
                        <pre class="${codeSnippet}">
        <code>      class PaymentProcessor {
            processPayment(amount: number, type: string): void {
                if (type === 'credit') {
                    console.log('Processing credit card payment...');
                } else if (type === 'debit') {
                    console.log('Processing debit card payment...');
                } else if (type === 'paypal') {  // New payment method requires modification
                    console.log('Processing PayPal payment...');
                }
            }
        }</code></pre>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <div class="font-bold text-green-700 mb-4 flex items-center">
                            <span class="mr-2">✅</span>
                            Good Example - Open for Extension
                        </div>
                        <pre class="${codeSnippet}">
            <code>        interface PaymentMethod {
            process(amount: number): void;
        }

        class CreditCardPayment implements PaymentMethod {
            process(amount: number): void {
                console.log('Processing credit card payment...');
            }
        }

        class DebitCardPayment implements PaymentMethod {
            process(amount: number): void {
                console.log('Processing debit card payment...');
            }
        }

        // New payment method - no modification needed to existing code
        class PayPalPayment implements PaymentMethod {
            process(amount: number): void {
                console.log('Processing PayPal payment...');
            }
        }

        class PaymentProcessor {
            processPayment(amount: number, paymentMethod: PaymentMethod): void {
                paymentMethod.process(amount);
            }
        }</code></pre>
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
                      <p class="text-lg text-gray-600 italic">"Objects of a superclass should be replaceable with objects of a subclass without altering the correctness of the program."</p>
                  </div>
              </div>

              <p class="text-lg text-gray-700 leading-relaxed mb-6">Subclasses should be substitutable for their base classes. This means derived classes must not change the behavior expected from the base class.</p>

              <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                  <div class="font-bold text-red-700 mb-4 flex items-center">
                      <span class="mr-2">❌</span>
                      Bad Example - LSP Violation
                  </div>
                  <pre class="${codeSnippet}">
          <code>  class Bird {
      fly(): void {
          console.log("Flying...");
      }
  }

  class Penguin extends Bird {
      fly(): void {
          throw new Error("Penguins can't fly!"); // Violates LSP
      }
  }

  // This will break when penguin is used
  function makeBirdFly(bird: Bird): void {
      bird.fly(); // Will throw error for Penguin
  }</code></pre>
              </div>

              <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <div class="font-bold text-green-700 mb-4 flex items-center">
                      <span class="mr-2">✅</span>
                      Good Example - Proper Substitution
                  </div>
                  <pre class="${codeSnippet}">
      <code>  abstract class Bird {
      abstract move(): void;
  }

  class FlyingBird extends Bird {
      move(): void {
          console.log("Flying...");
      }
  }

  class SwimmingBird extends Bird {
      move(): void {
          console.log("Swimming...");
      }
  }

  class Eagle extends FlyingBird {
      move(): void {
          console.log("Soaring through the sky...");
      }
  }

  class Penguin extends SwimmingBird {
      move(): void {
          console.log("Swimming gracefully...");
      }
  }

  // Now any Bird can be substituted safely
  function makeBirdMove(bird: Bird): void {
      bird.move(); // Works for all birds
  }</code></pre>
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
                      <p class="text-lg text-gray-600 italic">"No client should be forced to depend on methods it does not use."</p>
                  </div>
              </div>

              <p class="text-lg text-gray-700 leading-relaxed mb-6">Create specific, focused interfaces rather than large, general-purpose ones. Clients should only depend on interfaces they actually need.</p>

              <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                  <div class="font-bold text-red-700 mb-4 flex items-center">
                      <span class="mr-2">❌</span>
                      Bad Example - Fat Interface
                  </div>
                  <pre class="${codeSnippet}">
              <code>  interface Worker {
      work(): void;
      eat(): void;
      sleep(): void;
  }

  class HumanWorker implements Worker {
      work(): void { console.log("Working..."); }
      eat(): void { console.log("Eating..."); }
      sleep(): void { console.log("Sleeping..."); }
  }

  class RobotWorker implements Worker {
      work(): void { console.log("Working..."); }
      eat(): void { 
          throw new Error("Robots don't eat!"); // Forced to implement unused method
      }
      sleep(): void { 
          throw new Error("Robots don't sleep!"); // Forced to implement unused method
      }
  }</code></pre>
              </div>

              <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <div class="font-bold text-green-700 mb-4 flex items-center">
                      <span class="mr-2">✅</span>
                      Good Example - Segregated Interfaces
                  </div>
                  <pre class="${codeSnippet}">
              <code>  interface Workable {
      work(): void;
  }

  interface Eatable {
      eat(): void;
  }

  interface Sleepable {
      sleep(): void;
  }

  class HumanWorker implements Workable, Eatable, Sleepable {
      work(): void { console.log("Working..."); }
      eat(): void { console.log("Eating..."); }
      sleep(): void { console.log("Sleeping..."); }
  }

  class RobotWorker implements Workable {
      work(): void { console.log("Working..."); }
      // No need to implement eat() or sleep()
  }

  // Clients only depend on what they need
  class WorkManager {
      manage(worker: Workable): void {
          worker.work(); // Only cares about work capability
      }
  }</code></pre>
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
                      <p class="text-lg text-gray-600 italic">"High-level modules should not depend on low-level modules. Both should depend on abstractions."</p>
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
