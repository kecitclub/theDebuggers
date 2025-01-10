'use client'

import { useState } from 'react'
import { BidCard } from '@/components/Dashboard/activeBid/bid-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Bid {
  id: string
  title: string
  description: string
  currentAmount: number
  goalAmount: number
  daysLeft: number
  imageUrl: string
}

const initialBids: Bid[] = [
  {
    id: '1',
    title: 'Road Repair in Downtown',
    description: 'Help us fix potholes and resurface roads in the city center.',
    currentAmount: 15000,
    goalAmount: 50000,
    daysLeft: 15,
    imageUrl: '/placeholder.svg?height=200&width=400',
  },
  {
    id: '2',
    title: 'Community Park Renovation',
    description: 'Revitalize our local park with new playground equipment and landscaping.',
    currentAmount: 8000,
    goalAmount: 25000,
    daysLeft: 30,
    imageUrl: '/placeholder.svg?height=200&width=400',
  },
  {
    id: '3',
    title: 'Clean Water Initiative',
    description: 'Provide clean drinking water to underserved neighborhoods.',
    currentAmount: 12000,
    goalAmount: 40000,
    daysLeft: 20,
    imageUrl: '/placeholder.svg?height=200&width=400',
  },
]

export function ActiveBids() {
  const [bids, setBids] = useState<Bid[]>(initialBids)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBids = bids.filter(bid =>
    bid.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Start a Campaign</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBids.map(bid => (
          <BidCard key={bid.id} bid={bid} />
        ))}
      </div>
    </div>
  )
}

