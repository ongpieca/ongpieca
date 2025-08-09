import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Heart } from "lucide-react";
import { Card, CardContent } from "./card";
import { useLanguage } from "@/contexts/LanguageContext";
import PayPalButton from "./paypal-button";

export default function DonationSection() {
  const { t } = useLanguage();
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState('');
  const [isDedicated, setIsDedicated] = useState(false);
  const [dedicationName, setDedicationName] = useState('');

  const amounts = [500, 250, 120, 70, 25, 20];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const getCurrentAmount = () => {
    return customAmount ? parseInt(customAmount) : selectedAmount;
  };

  return (
    <section id="donate" className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-primary-green mb-6">
            {t.donation.title}
          </h2>
          <p className="text-xl text-black">
            {t.donation.description}
          </p>
        </div>

        <Card className="bg-white rounded-2xl shadow-xl max-w-2xl mx-auto animate-fade-in">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="flex justify-center space-x-4 mb-6">
                <Button
                  type="button"
                  variant={donationType === 'one-time' ? 'outline' : 'ghost'}
                  onClick={() => setDonationType('one-time')}
                  className={`px-6 py-2 rounded-full border-2 font-semibold transition-colors ${
                    donationType === 'one-time'
                      ? 'border-primary-green text-primary-green bg-primary-green/10'
                      : 'border-gray-300 text-black hover:border-primary-green hover:text-primary-green'
                  }`}
                >
                  One-time
                </Button>
                <Button
                  type="button"
                  variant={donationType === 'monthly' ? 'default' : 'ghost'}
                  onClick={() => setDonationType('monthly')}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    donationType === 'monthly'
                      ? 'bg-accent-red text-white hover:bg-red-600'
                      : 'text-black hover:text-accent-red'
                  }`}
                >
                  <Heart className="mr-1 h-4 w-4" /> Monthly
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                      selectedAmount === amount
                        ? 'border-primary-green bg-primary-green/10 text-primary-green'
                        : 'border-gray-300 hover:border-primary-green hover:text-primary-green'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Input
                  type="number"
                  placeholder="50"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="w-full p-4 text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-primary-green pr-16"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black font-semibold">
                  USD
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="dedicate"
                    checked={isDedicated}
                    onCheckedChange={(checked) => setIsDedicated(checked === true)}
                  />
                  <label htmlFor="dedicate" className="text-black">
                    Dedicate this donation
                  </label>
                </div>
                
                {isDedicated && (
                  <Input
                    placeholder="Name of someone special to me"
                    value={dedicationName}
                    onChange={(e) => setDedicationName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary-green"
                  />
                )}
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-black">
                  Once you've donated, you'll be able to add a personal message and send a card.
                </div>
                
                <Select>
                  <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary-green">
                    <SelectValue placeholder="Designate to where needed most" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Where needed most</SelectItem>
                    <SelectItem value="education">Education Projects</SelectItem>
                    <SelectItem value="healthcare">Healthcare Services</SelectItem>
                    <SelectItem value="water">Water Access</SelectItem>
                    <SelectItem value="food">Food Security</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea
                  placeholder="Add comment"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary-green"
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-primary-green text-white p-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                >
                  Donate and Support
                </Button>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Or pay with PayPal:</p>
                  <div className="flex justify-center">
                    <div className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg cursor-pointer transition-colors">
                      <PayPalButton
                        amount={getCurrentAmount().toString()}
                        currency="USD"
                        intent="CAPTURE"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
