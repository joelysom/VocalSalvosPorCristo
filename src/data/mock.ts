export type RegistrationStep = {
  id: string;
  title: string;
  description: string;
};

export type FormState = {
  loginEmail: string;
  loginPassword: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  cep: string;
  neighborhood: string;
  city: string;
  street: string;
  houseNumber: string;
  maritalStatus: string;
  gender: string;
  vocalRange: string;
  availability: string;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const registrationSteps: RegistrationStep[] = [
  {
    id: "perfil",
    title: "Sua identidade no ministério",
    description:
      "Colete os dados principais para iniciar o cadastro com clareza e segurança.",
  },
  {
    id: "localizacao",
    title: "Logística e deslocamento",
    description:
      "Organize ensaios, escalas e comunicação com base na localização do membro.",
  },
  {
    id: "voz",
    title: "Perfil vocal e disponibilidade",
    description:
      "Finalize o cadastro com informações que ajudam a montar escalas melhores.",
  },
];

export const initialFormState: FormState = {
  loginEmail: "",
  loginPassword: "",
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  cep: "",
  neighborhood: "",
  city: "",
  street: "",
  houseNumber: "",
  maritalStatus: "",
  gender: "",
  vocalRange: "",
  availability: "Terças e sábados",
};

export const metrics = [
  { label: "Membros ativos", value: "38", detail: "+4 este mês" },
  { label: "Ensaios confirmados", value: "12", detail: "Agenda de abril" },
  { label: "Pedidos de ajuda", value: "07", detail: "2 urgentes hoje" },
];

export const rehearsals = [
  {
    title: "Ensaio geral de domingo",
    day: "Terça-feira",
    time: "19:30",
    location: "Templo sede",
    note: "Foco em dinâmica vocal e transições.",
  },
  {
    title: "Passagem de som especial",
    day: "Sexta-feira",
    time: "20:00",
    location: "Auditório anexo",
    note: "Chegada 30 min antes com repertório revisado.",
  },
  {
    title: "Oração e alinhamento",
    day: "Domingo",
    time: "17:15",
    location: "Sala do vocal",
    note: "Momento rápido de comunhão antes do culto.",
  },
];

export const helpCards = [
  {
    title: "Cobertura de escala",
    category: "Agenda",
    status: "Urgente",
    description:
      "Localize rapidamente quem pode assumir ensaios e ministrações em aberto.",
  },
  {
    title: "Apoio espiritual",
    category: "Cuidado",
    status: "Ativo",
    description:
      "Abra pedidos confidenciais para oração, acompanhamento e aconselhamento.",
  },
  {
    title: "Biblioteca vocal",
    category: "Treinamento",
    status: "Novo",
    description:
      "Concentre cifras, guias, tons e observações para cada música do repertório.",
  },
  {
    title: "Comunicação do ministério",
    category: "Equipe",
    status: "Ativo",
    description:
      "Envie recados importantes com prioridade, sem depender de mensagens soltas.",
  },
];

export const members = [
  {
    name: "Maria Clara",
    role: "Soprano",
    availability: "Disponível",
    focus: "Escalas de culto e harmonias altas",
  },
  {
    name: "Samuel Ribeiro",
    role: "Tenor",
    availability: "Em deslocamento",
    focus: "Liderança de ensaio e apoio técnico",
  },
  {
    name: "Débora Lima",
    role: "Contralto",
    availability: "Disponível",
    focus: "Acolhimento de novos membros",
  },
  {
    name: "João Victor",
    role: "Barítono",
    availability: "Indisponível hoje",
    focus: "Base vocal e acompanhamento",
  },
];

export const repertoire = [
  {
    title: "Tu És Santo",
    tone: "G",
    type: "Adoração",
    update: "Arranjo revisado ontem",
  },
  {
    title: "Graça Sobre Graça",
    tone: "A",
    type: "Celebração",
    update: "Guia novo liberado",
  },
  {
    title: "Bondade de Deus",
    tone: "D",
    type: "Momento de entrega",
    update: "Pronto para domingo",
  },
];