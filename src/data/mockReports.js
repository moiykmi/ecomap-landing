export const mockReports = [
  {
    id: 1,
    type: 'microbasural',
    title: 'Microbasural en esquina',
    description: 'Acumulación de residuos en esquina de Av. Principal con San Martín. Hay bolsas rotas y desperdicios esparcidos.',
    urgency: 'alto',
    location: { lat: -33.4489, lng: -70.6693 },
    address: 'Av. Principal 1234, Puente Alto',
    status: 'nuevo',
    photos: ['/mock-images/microbasural1.jpg', '/mock-images/microbasural2.jpg'],
    createdAt: '2025-08-01T10:30:00Z',
    anonymous: false,
    reporter: 'María González'
  },
  {
    id: 2,
    type: 'contaminacion-aire',
    title: 'Humo industrial persistente',
    description: 'Emisión constante de humo negro desde fábrica. El olor es muy fuerte y afecta a toda la cuadra.',
    urgency: 'alto',
    location: { lat: -33.4576, lng: -70.6480 },
    address: 'Calle Industrial 567, San Bernardo',
    status: 'en-revision',
    photos: ['/mock-images/humo1.jpg'],
    createdAt: '2025-07-30T14:15:00Z',
    anonymous: true,
    reporter: 'Anónimo'
  },
  {
    id: 3,
    type: 'contaminacion-agua',
    title: 'Derrame en río',
    description: 'Líquido de color extraño en el río. Los peces están muriendo y hay mal olor.',
    urgency: 'alto',
    location: { lat: -33.4372, lng: -70.6506 },
    address: 'Ribera Norte, Las Condes',
    status: 'resuelto',
    photos: ['/mock-images/agua1.jpg', '/mock-images/agua2.jpg'],
    createdAt: '2025-07-28T08:45:00Z',
    anonymous: false,
    reporter: 'Carlos Mendoza'
  },
  {
    id: 4,
    type: 'ruido',
    title: 'Construcción nocturna',
    description: 'Obras de construcción durante horarios no permitidos. Ruido excesivo que impide el descanso.',
    urgency: 'medio',
    location: { lat: -33.4334, lng: -70.6118 },
    address: 'Los Leones 890, Providencia',
    status: 'nuevo',
    photos: ['/mock-images/construccion1.jpg'],
    createdAt: '2025-08-02T22:00:00Z',
    anonymous: false,
    reporter: 'Ana Rodríguez'
  },
  {
    id: 5,
    type: 'residuos-peligrosos',
    title: 'Desechos químicos abandonados',
    description: 'Contenedores con sustancias químicas abandonados en terreno baldío. Hay etiquetas de peligro.',
    urgency: 'alto',
    location: { lat: -33.4260, lng: -70.6110 },
    address: 'Lote baldío, Calle Los Aromos',
    status: 'en-revision',
    photos: ['/mock-images/quimicos1.jpg', '/mock-images/quimicos2.jpg'],
    createdAt: '2025-08-01T16:20:00Z',
    anonymous: true,
    reporter: 'Anónimo'
  }
];

export const reportTypes = [
  {
    id: 'microbasural',
    name: 'Microbasural',
    icon: '🗑️',
    color: '#F57C00',
    description: 'Acumulación irregular de residuos'
  },
  {
    id: 'contaminacion-aire',
    name: 'Contaminación del Aire',
    icon: '💨',
    color: '#9E9E9E',
    description: 'Emisiones, humos y olores'
  },
  {
    id: 'contaminacion-agua',
    name: 'Contaminación del Agua',
    icon: '💧',
    color: '#2196F3',
    description: 'Derrames y contaminación hídrica'
  },
  {
    id: 'ruido',
    name: 'Contaminación Acústica',
    icon: '🔊',
    color: '#FF5722',
    description: 'Ruidos molestos y excesivos'
  },
  {
    id: 'residuos-peligrosos',
    name: 'Residuos Peligrosos',
    icon: '☢️',
    color: '#D32F2F',
    description: 'Desechos tóxicos y químicos'
  }
];

export const mockStats = {
  totalReports: 2847,
  activeCommunities: 156,
  resolvedPercentage: 89,
  averageResponseTime: 24
};