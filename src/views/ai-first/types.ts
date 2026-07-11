export interface AiContact {
  label: string
  value: string
  href: string
}

export interface AiProfile {
  name: string
  eyebrow: string
  title: string
  avatar: string
  experienceStartYear: number
  meta: string[]
  summary: string
  contacts: AiContact[]
}

export interface EvidenceMetric {
  value: string
  unit: string
  label: string
  detail: string
}

export interface DeliveryStage {
  index: string
  label: string
  owner: 'Human' | 'Agent' | 'System'
  detail: string
  output: string
}

export interface AiCase {
  name: string
  kind: string
  period: string
  role: string
  signal: string
  input: string
  constraints: string
  agentExecution: string
  humanReview: string
  outcome: string
  tech: string[]
}

export interface Capability {
  label: string
  proof: string
}

export interface AiResume {
  profile: AiProfile
  metrics: EvidenceMetric[]
  pipeline: DeliveryStage[]
  cases: AiCase[]
  capabilities: Capability[]
  classicEvidence: string[]
  closing: string
}
