import React from "react";
import { Check, HelpCircle, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { featureComparison } from "@/data/feature-comparison";

export function FeatureComparisonTable() {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm text-center block">{value}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <h3 className="text-2xl font-bold text-center mb-8">
        Comparação detalhada dos recursos
      </h3>
      <div className="overflow-x-auto">
        <TooltipProvider>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Recurso</TableHead>
                <TableHead className="text-center">Solo</TableHead>
                <TableHead className="text-center bg-primary/5">
                  Equipe
                </TableHead>
                <TableHead className="text-center">Empresarial</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(featureComparison).map(([category, features]) => (
                <React.Fragment key={category}>
                  <TableRow>
                    <TableCell colSpan={4} className="bg-gray-50 font-semibold">
                      {category}
                    </TableCell>
                  </TableRow>
                  {features.map((feature, index) => (
                    <TableRow key={`${category}-${index}`}>
                      <TableCell className="font-medium flex items-center gap-2">
                        {feature.name}
                        {feature.tooltip && (
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{feature?.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {renderValue(feature.solo)}
                      </TableCell>
                      <TableCell className="text-center bg-primary/5">
                        {renderValue(feature.equipe)}
                      </TableCell>
                      <TableCell className="text-center">
                        {renderValue(feature.empresarial)}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TooltipProvider>
      </div>
    </div>
  );
}
