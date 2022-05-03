import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("Should render one Followers", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(/follower-item-0/i);
    expect(followerDivElement).toBeInTheDocument();
  });
  it("Should render all Followers", async () => {
    render(<MockFollowersList />);
    const followersDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followersDivElement.length).toBe(5);
  });
});
