import React from "react";
import Card from "../../../components/card";

const Team: React.FC = () => {
  const team = [
    {
      name: "Oderinde Michael",
      role: "Founder & CEO",
      image: "",
      description:
        "Environmental advocate with 10+ years in sustainable retail.",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            The passionate people behind ThriftEase's mission
          </p>
        </div>

        <div className="grid gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center transition-shadow">
              <div className="p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover font-body bg-foreground/10"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-primary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
