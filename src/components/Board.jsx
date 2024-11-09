import Clickbox from "./Clickbox";

export default function Board() {
  return (
    <div class="grid grid-cols-3 gap-1">
      <Clickbox />
      <Clickbox />
      <Clickbox />
      <Clickbox />
      <Clickbox />
      <Clickbox />
      <Clickbox />
      <Clickbox />
      <Clickbox />
    </div>
  );
}
