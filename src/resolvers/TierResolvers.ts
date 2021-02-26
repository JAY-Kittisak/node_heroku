import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { Tier, TierModel } from '../entities/Tier';

import { ValidateCompanyName } from '../utils/validate';

@Resolver()
export class TierResolvers {
    @Query(() => [Tier], { nullable: 'items' })
    async Tiers(): Promise<Tier[] | null> {
        try {
            return TierModel.find();
            //   .populate({
            //     path: "productsMe",
            //   })
            // .populate({
            //   path: "receivedProducts",
            //   populate: {
            //     path: "companyName",
            //     populate: {
            //       path: "receivedProducts",
            //       populate: { path: "companyName" },
            //     },
            //   },
            // });
        } catch (error) {
            throw error;
        }
    }
    @Query(() => Tier, { nullable: true })
    async TierById(@Arg('id') id: string): Promise<Tier | null> {
        try {
            const tierById = await TierModel.findById(id);
            if (!tierById) throw new Error('ID ที่ใส่มานั้นไม่ถูกต้อง');

            return TierModel.findById(id)
                .populate({
                    path: 'productsMe',
                    populate: { path: 'factoryReceive' }
                })
                .populate({
                    path: 'receivedProducts',
                    populate: {
                        path: 'companyName',
                        populate: {
                            path: 'receivedProducts',
                            populate: {
                                path: 'companyName',
                                populate: {
                                    path: 'receivedProducts',
                                    populate: { path: 'companyName' }
                                }
                            }
                        }
                    }
                });
        } catch (error) {
            throw error;
        }
    }
    @Query(() => Tier, { nullable: true })
    async TierFindOne(@Arg('companyName') companyName: string): Promise<Tier | null> {
        try {
            const companyNameFindOne = await TierModel.findOne({ companyName });
            if (!companyNameFindOne) throw new Error('ชื่อบริษัทที่ใส่มานั้นไม่ถูกต้อง');

            return TierModel.findOne({ companyName });
            // .populate({
            //   path: "productsMe",
            //   populate: { path: "factoryReceive" },
            // })
            // .populate({
            //   path: "receivedProducts",
            //   populate: {
            //     path: "companyName",
            //     populate: {
            //       path: "receivedProducts",
            //       populate: {
            //         path: "companyName",
            //         populate: {
            //           path: "receivedProducts",
            //           populate: { path: "companyName" },
            //         },
            //       },
            //     },
            //   },
            // })
            // .populate({
            //   path: "user",
            // });
        } catch (error) {
            throw error;
        }
    }
    @Mutation(() => Tier, { nullable: true })
    async createTier(
        @Arg('companyName') companyName: string,
        @Arg('industrialEstate') industrialEstate: string,
        @Arg('businessType') businessType: string,
        @Arg('description') description: string,
        @Arg('address') address: string,
        @Arg('phoneNumber') phoneNumber: string,
        @Arg('FAX') FAX: string,
        @Arg('Email') Email: string
    ): Promise<Tier | null> {
        try {
            if (!companyName) throw new Error('โปรใส่ชื่อบริษัท');

            //TODO กำหนดมีความยาวมากกว่า 60-*250 ตัวอักษร
            const isCompanyName = ValidateCompanyName(companyName);
            if (!isCompanyName) throw new Error('มีความยาวมากกว่า 60 ตัวอักษร');

            const newTier = await TierModel.create({
                companyName,
                industrialEstate,
                businessType,
                description,
                address,
                phoneNumber,
                FAX,
                Email
            });

            await newTier.save();
            return TierModel.findById(newTier.id);
        } catch (error) {
            throw error;
        }
    }
}
