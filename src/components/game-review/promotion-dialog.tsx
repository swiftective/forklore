import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";
import { Button } from "../ui/button";

function PromotionDialog({
  open,
  onSelect,
}: {
  open: boolean;
  onSelect: (piece: string) => void;
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <Button
          onClick={() => {
            onSelect("q");
          }}
        >
          Q
        </Button>
        <Button
          onClick={() => {
            onSelect("b");
          }}
        >
          B
        </Button>
        <Button
          onClick={() => {
            onSelect("r");
          }}
        >
          R
        </Button>
        <Button
          onClick={() => {
            onSelect("n");
          }}
        >
          N
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PromotionDialog;
