import Card from "./Card";
import "./HeroSection.css";

export default function HeroSection({ employees }) {
  return (
    <div className="employees">
      {employees.length > 0 ? (
        employees.map((employee, index) => (
          <div key={index}>
            <Card
              empName={employee.name}
              role={employee.role}
              email={employee.email}
              image={employee.image}
            />
          </div>
        ))
      ) : (
        <p>No employees available.</p>
      )}
    </div>
  );
}
