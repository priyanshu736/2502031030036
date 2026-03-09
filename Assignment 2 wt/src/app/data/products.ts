export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  specs: { [key: string]: string };
  inStock: boolean;
  rating: number;
}

export const categories = [
  { id: 'gpu', name: 'Graphics Cards', icon: '🎮' },
  { id: 'cpu', name: 'Processors', icon: '⚡' },
  { id: 'motherboard', name: 'Motherboards', icon: '🔲' },
  { id: 'ram', name: 'Memory (RAM)', icon: '💾' },
  { id: 'storage', name: 'Storage', icon: '💿' },
  { id: 'psu', name: 'Power Supplies', icon: '🔌' },
  { id: 'case', name: 'Cases', icon: '📦' },
  { id: 'cooling', name: 'Cooling', icon: '❄️' },
];

export const products: Product[] = [
  // Graphics Cards
  {
    id: 'gpu-1',
    name: 'NVIDIA RTX 4090',
    category: 'gpu',
    price: 1599.99,
    description: 'Ultimate gaming performance with ray tracing and DLSS 3.0',
    image: 'https://images.unsplash.com/photo-1658673847785-08f1738116f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBHUFV8ZW58MXx8fHwxNzczMDY1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Memory': '24GB GDDR6X',
      'Boost Clock': '2.52 GHz',
      'TDP': '450W',
      'Interface': 'PCIe 4.0 x16'
    },
    inStock: true,
    rating: 4.9
  },
  {
    id: 'gpu-2',
    name: 'AMD Radeon RX 7900 XTX',
    category: 'gpu',
    price: 999.99,
    description: 'High-performance gaming with advanced RDNA 3 architecture',
    image: 'https://images.unsplash.com/photo-1658673847785-08f1738116f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBHUFV8ZW58MXx8fHwxNzczMDY1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Memory': '24GB GDDR6',
      'Boost Clock': '2.5 GHz',
      'TDP': '355W',
      'Interface': 'PCIe 4.0 x16'
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: 'gpu-3',
    name: 'NVIDIA RTX 4070 Ti',
    category: 'gpu',
    price: 799.99,
    description: 'Excellent 1440p and 4K gaming performance',
    image: 'https://images.unsplash.com/photo-1658673847785-08f1738116f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBHUFV8ZW58MXx8fHwxNzczMDY1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Memory': '12GB GDDR6X',
      'Boost Clock': '2.61 GHz',
      'TDP': '285W',
      'Interface': 'PCIe 4.0 x16'
    },
    inStock: true,
    rating: 4.6
  },
  // Processors
  {
    id: 'cpu-1',
    name: 'Intel Core i9-14900K',
    category: 'cpu',
    price: 589.99,
    description: 'Top-tier gaming and content creation processor',
    image: 'https://images.unsplash.com/photo-1588732283387-96e6650e7fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvciUyMENQVXxlbnwxfHx8fDE3NzMwNDc5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Cores/Threads': '24/32',
      'Base Clock': '3.2 GHz',
      'Boost Clock': '6.0 GHz',
      'Socket': 'LGA1700'
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: 'cpu-2',
    name: 'AMD Ryzen 9 7950X',
    category: 'cpu',
    price: 549.99,
    description: 'Exceptional multi-threaded performance',
    image: 'https://images.unsplash.com/photo-1588732283387-96e6650e7fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvciUyMENQVXxlbnwxfHx8fDE3NzMwNDc5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Cores/Threads': '16/32',
      'Base Clock': '4.5 GHz',
      'Boost Clock': '5.7 GHz',
      'Socket': 'AM5'
    },
    inStock: true,
    rating: 4.9
  },
  {
    id: 'cpu-3',
    name: 'Intel Core i7-14700K',
    category: 'cpu',
    price: 409.99,
    description: 'Powerful gaming and productivity processor',
    image: 'https://images.unsplash.com/photo-1588732283387-96e6650e7fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvciUyMENQVXxlbnwxfHx8fDE3NzMwNDc5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Cores/Threads': '20/28',
      'Base Clock': '3.4 GHz',
      'Boost Clock': '5.6 GHz',
      'Socket': 'LGA1700'
    },
    inStock: true,
    rating: 4.7
  },
  // Motherboards
  {
    id: 'mb-1',
    name: 'ASUS ROG Maximus Z790 Hero',
    category: 'motherboard',
    price: 629.99,
    description: 'Premium Z790 motherboard for Intel 14th gen',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdGhlcmJvYXJkfGVufDF8fHx8MTc3MzAyNDg0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Socket': 'LGA1700',
      'Form Factor': 'ATX',
      'Memory': 'DDR5-7800+ (OC)',
      'PCIe 5.0': 'Yes'
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: 'mb-2',
    name: 'MSI MPG X670E Carbon',
    category: 'motherboard',
    price: 449.99,
    description: 'High-end AM5 motherboard for Ryzen 7000 series',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdGhlcmJvYXJkfGVufDF8fHx8MTc3MzAyNDg0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Socket': 'AM5',
      'Form Factor': 'ATX',
      'Memory': 'DDR5-6400+ (OC)',
      'PCIe 5.0': 'Yes'
    },
    inStock: true,
    rating: 4.7
  },
  // RAM
  {
    id: 'ram-1',
    name: 'Corsair Dominator Platinum 32GB',
    category: 'ram',
    price: 189.99,
    description: 'Premium DDR5 memory with RGB lighting',
    image: 'https://images.unsplash.com/photo-1724506381599-2a9aa489366f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSQU0lMjBtZW1vcnklMjBtb2R1bGV8ZW58MXx8fHwxNzczMDY1NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Type': 'DDR5',
      'Speed': '6000MHz',
      'Latency': 'CL36'
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: 'ram-2',
    name: 'G.SKILL Trident Z5 RGB 64GB',
    category: 'ram',
    price: 299.99,
    description: 'High-capacity DDR5 for demanding workloads',
    image: 'https://images.unsplash.com/photo-1724506381599-2a9aa489366f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSQU0lMjBtZW1vcnklMjBtb2R1bGV8ZW58MXx8fHwxNzczMDY1NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Capacity': '64GB (2x32GB)',
      'Type': 'DDR5',
      'Speed': '6400MHz',
      'Latency': 'CL32'
    },
    inStock: true,
    rating: 4.9
  },
  // Storage
  {
    id: 'ssd-1',
    name: 'Samsung 990 Pro 2TB',
    category: 'storage',
    price: 199.99,
    description: 'Ultra-fast PCIe 4.0 NVMe SSD',
    image: 'https://images.unsplash.com/photo-1756836857608-16c9213c1d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTU0QlMjBzdG9yYWdlJTIwZHJpdmV8ZW58MXx8fHwxNzczMDA0NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0 x4',
      'Read Speed': '7,450 MB/s',
      'Write Speed': '6,900 MB/s'
    },
    inStock: true,
    rating: 4.9
  },
  {
    id: 'ssd-2',
    name: 'WD Black SN850X 4TB',
    category: 'storage',
    price: 349.99,
    description: 'High-capacity gaming SSD',
    image: 'https://images.unsplash.com/photo-1756836857608-16c9213c1d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTU0QlMjBzdG9yYWdlJTIwZHJpdmV8ZW58MXx8fHwxNzczMDA0NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Capacity': '4TB',
      'Interface': 'PCIe 4.0 x4',
      'Read Speed': '7,300 MB/s',
      'Write Speed': '6,600 MB/s'
    },
    inStock: true,
    rating: 4.8
  },
  // Power Supplies
  {
    id: 'psu-1',
    name: 'Corsair RM1000x',
    category: 'psu',
    price: 199.99,
    description: '1000W 80+ Gold fully modular PSU',
    image: 'https://images.unsplash.com/photo-1588382472578-8d8b337b277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHBvd2VyJTIwc3VwcGx5fGVufDF8fHx8MTc3MzAzOTA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Wattage': '1000W',
      'Efficiency': '80+ Gold',
      'Modular': 'Fully Modular',
      'Warranty': '10 Years'
    },
    inStock: true,
    rating: 4.9
  },
  {
    id: 'psu-2',
    name: 'EVGA SuperNOVA 850 G6',
    category: 'psu',
    price: 129.99,
    description: '850W 80+ Gold compact PSU',
    image: 'https://images.unsplash.com/photo-1588382472578-8d8b337b277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHBvd2VyJTIwc3VwcGx5fGVufDF8fHx8MTc3MzAzOTA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Wattage': '850W',
      'Efficiency': '80+ Gold',
      'Modular': 'Fully Modular',
      'Warranty': '10 Years'
    },
    inStock: true,
    rating: 4.8
  },
  // Cases
  {
    id: 'case-1',
    name: 'Lian Li O11 Dynamic EVO',
    category: 'case',
    price: 169.99,
    description: 'Premium mid-tower with excellent airflow',
    image: 'https://images.unsplash.com/photo-1760708825878-9e7ecf31565a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQQyUyMGNhc2UlMjB0b3dlcnxlbnwxfHx8fDE3NzMwNjU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Form Factor': 'Mid Tower',
      'Material': 'Aluminum/Tempered Glass',
      'Max GPU Length': '420mm',
      'Max CPU Cooler': '167mm'
    },
    inStock: true,
    rating: 4.9
  },
  {
    id: 'case-2',
    name: 'NZXT H7 Flow',
    category: 'case',
    price: 129.99,
    description: 'Modern case with optimized airflow',
    image: 'https://images.unsplash.com/photo-1760708825878-9e7ecf31565a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQQyUyMGNhc2UlMjB0b3dlcnxlbnwxfHx8fDE3NzMwNjU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Form Factor': 'Mid Tower',
      'Material': 'Steel/Tempered Glass',
      'Max GPU Length': '400mm',
      'Max CPU Cooler': '185mm'
    },
    inStock: true,
    rating: 4.7
  },
  // Cooling
  {
    id: 'cool-1',
    name: 'NZXT Kraken 360 RGB',
    category: 'cooling',
    price: 249.99,
    description: '360mm AIO liquid cooler with LCD display',
    image: 'https://images.unsplash.com/photo-1760708826212-2830909b45f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvb2xpbmclMjBmYW58ZW58MXx8fHwxNzczMDM5MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Type': 'AIO Liquid Cooler',
      'Radiator Size': '360mm',
      'Fan Speed': '500-2000 RPM',
      'Noise Level': '21-38 dBA'
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: 'cool-2',
    name: 'Noctua NH-D15',
    category: 'cooling',
    price: 109.99,
    description: 'Premium dual-tower air cooler',
    image: 'https://images.unsplash.com/photo-1760708826212-2830909b45f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvb2xpbmclMjBmYW58ZW58MXx8fHwxNzczMDM5MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      'Type': 'Air Cooler',
      'Height': '165mm',
      'Fan Speed': '300-1500 RPM',
      'Noise Level': '19.2-24.6 dBA'
    },
    inStock: true,
    rating: 4.9
  }
];
