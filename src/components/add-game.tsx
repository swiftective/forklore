import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button"


// type AddGameProps = {};

function AddGame() {
  return (
    <div className="h-full">
      <Textarea className="h-[70%]" placeholder="Paste the pgn" />
      <RadioGroup className="m-8" defaultValue="white">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="white" id="option-one" />
          <Label htmlFor="option-one">White</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="black" id="option-two" />
          <Label htmlFor="option-two">Black</Label>
        </div>
      </RadioGroup>
      <Button className="w-full">Add Game</Button>
    </div>
  );
}

export default AddGame;
