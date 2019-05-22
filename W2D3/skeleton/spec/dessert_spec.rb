require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "Onyi Cho") }
  let(:dessert) { Dessert.new("Cake", 100, chef) }

  describe "#initialize" do
      
    it "sets a type" do 
      expect(dessert.type.nil?).to eq(false)
      expect(dessert.type).to eq("Cake")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(100)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients.empty?).to eq(true)
    end

    let(:wrongdessert) { Dessert.new("Pudin", "I want a Hundred!", chef) }
    it "raises an argument error when given a non-integer quantity" do
      expect{ wrongdessert.quantity }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect{ dessert.add_ingredient("Cheese") }.to_not raise_error(StandardError)
      expect(dessert.ingredients.include?("Cheese")).to eq(true) 
      expect{ dessert.add_ingredient("Egg") }.to_not raise_error(StandardError)
      expect(dessert.ingredients.length).to eq(2)
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      dessert.add_ingredient("Egg")
      expect{ dessert.mix! }.to_not raise_error(StandardError)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      dessert.eat(10)
      expect(dessert.quantity).to eq(90)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect{ dessert.eat(999) }.to raise_error(StandardError)
    end
  end


  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Onyi Cho the Great Baker")
      expect(dessert.serve).to include("Chef Onyi Cho the Great Baker")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
      # expect(dessert.temp).to eq(400)
    end
  end
end
