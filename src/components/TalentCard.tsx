
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TalentCardProps {
  name: string;
  title: string;
  category: string;
  rate: string;
  description: string;
  availability: "Available" | "Busy" | "Part-time";
}

export const TalentCard = ({
  name,
  title,
  category,
  rate,
  description,
  availability,
}: TalentCardProps) => {
  return (
    <Card className="w-full max-w-sm transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <Badge
            variant={
              availability === "Available"
                ? "success"
                : availability === "Busy"
                ? "destructive"
                : "secondary"
            }
          >
            {availability}
          </Badge>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground">{title}</span>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold">{rate}</span>
        <Button>Connect</Button>
      </CardFooter>
    </Card>
  );
};
