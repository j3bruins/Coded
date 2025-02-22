
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Shield, CheckCircle, XCircle, Clock } from 'lucide-react';

const Validator = () => {
  return (
    <div className="py-12 bg-black/80 backdrop-blur" id="validator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#00ff41] mb-8">
            Validation Process
          </h2>
          <p className="text-[#00ff41]/80 mb-12 max-w-2xl mx-auto">
            Our validation system ensures that all tokenized skills are verified by experts before being minted as NFTs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/60 border-[#00ff41]/30">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 text-[#00ff41] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#00ff41]">Submit Request</h3>
            </CardHeader>
            <CardContent className="text-[#00ff41]/80">
              <p>Talents submit their proof of skills along with relevant documentation for verification</p>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-[#00ff41]/30">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-[#00ff41] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#00ff41]">Expert Review</h3>
            </CardHeader>
            <CardContent className="text-[#00ff41]/80">
              <p>Our expert validators carefully review submissions to verify skill authenticity</p>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-[#00ff41]/30">
            <CardHeader className="text-center">
              <CheckCircle className="w-12 h-12 text-[#00ff41] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#00ff41]">NFT Minting</h3>
            </CardHeader>
            <CardContent className="text-[#00ff41]/80">
              <p>Upon approval, skills are minted as verifiable NFTs on the marketplace</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-[#00ff41]/80 text-sm">
            <CheckCircle className="w-5 h-5" /> Approved
            <XCircle className="w-5 h-5 ml-4" /> Rejected
            <Clock className="w-5 h-5 ml-4" /> Pending
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validator;
