'use server';
import prisma from "@/lib/db";

const handleVisitorRegistration = async (visitor: any) => {
    const visitors = await prisma.visitors.create({
        data: { plate: `${visitor.licensePlate}`,
                sponsor: `${visitor.sponsor}`,
                startDate: new Date(),
                endDate: new Date(new Date().getTime()+(visitor.duration*24*60*60*1000))},
    })
}

export default handleVisitorRegistration;