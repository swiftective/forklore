import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Chess } from "chess.js";
import { useToast } from "@/components/ui/use-toast";

// type AddGameProps = {};

export type AddGameInput = {
  pgn: string;
  player: "white" | "black";
};

function AddGame({
  onComplete,
}: {
  onComplete: (input: AddGameInput) => void;
}) {
  const [input, setInput] = useState<AddGameInput>({
    pgn: "",
    player: "white",
  });
  const chess = new Chess();
  const { toast } = useToast();

  return (
    <div className="h-full">
      <Textarea
        value={input.pgn}
        onChange={(e) => {
          setInput({ ...input, pgn: e.target.value });
        }}
        className="h-[70%] resize-none"
        placeholder="Paste the pgn"
      />
      <RadioGroup
        className="m-8"
        value={input.player}
        onValueChange={(player: "white" | "black") => {
          setInput({ ...input, player: player });
        }}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="white" id="option-one" />
          <Label htmlFor="option-one">White</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="black" id="option-two" />
          <Label htmlFor="option-two">Black</Label>
        </div>
      </RadioGroup>
      <Button
        className="w-full"
        onClick={() => {
          try {
            if (input.pgn == "") {
              return;
            }
            chess.loadPgn(input.pgn);
            onComplete(input);
          } catch (_) {
            toast({
              title: "Invalid PGN",
              description: "Check the format of the PGN",
            });
          }
        }}
      >
        Add Game
      </Button>
    </div>
  );
}

export default AddGame;
