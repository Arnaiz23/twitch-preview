export interface Channels {
  channel: string;
  image: string;
  categorie: string;
  viewers: string;
  description: string;
}

// Define the type for the inner array
type CounterscaleCommand = [string, ...string[]];

// Define the interface for the counterscale object
export interface Counterscale {
  q: CounterscaleCommand[];
}
